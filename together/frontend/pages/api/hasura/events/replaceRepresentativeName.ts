import { handleApiError } from "api";
import { addRepresentativeNameToLetterContent } from "common";
import {
  queryGetLetterContentById,
  updateLetterContentRepresentativeNameById,
} from "generated";
import { getHasuraAdminClient } from "lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async function replaceRepresentativeName(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  try {
    const adminClient = getHasuraAdminClient({ request });

    const [result, _meta] = await queryGetLetterContentById({
      variables: {
        contentId:
          request.body.event.data?.new?.id ?? request.body.event.data?.new?.id,
      },
      client: adminClient,
    });

    const representative = result?.letterContents_by_pk?.representative;
    const representativeFullName =
      representative?.firstname + " " + representative.lastname;

    const [data] = await updateLetterContentRepresentativeNameById({
      variables: {
        contentId: result?.letterContents_by_pk?.id,
        content: addRepresentativeNameToLetterContent(
          representativeFullName,
          result?.letterContents_by_pk?.content
        ),
      },
      client: adminClient,
    });

    response.json({ id: data?.update_letterContents_by_pk?.id });
  } catch (error) {
    handleApiError(error, response);
  }
}
