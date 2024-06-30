export function addRepresentativeNameToLetterContent(
  representativeName: string,
  content?: string
) {
  if (!content || content === "") {
    return "";
  } else {
    const newContent = content.replace(
      /\[representative\]/gi,
      representativeName
    );
    return newContent;
  }
}
