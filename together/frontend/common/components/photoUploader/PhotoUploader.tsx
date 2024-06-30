import React from 'react';
import * as Styled from "./PhotoUploader.styled";
import { usePhotoUploader } from './hooks';

export const PhotoUploader = (): JSX.Element => {
  const { fileList, onChange, onPreview } = usePhotoUploader();

  return (
    <>
      <Styled.PhotoUpload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && '+ Add cover photo'}
      </Styled.PhotoUpload>
    </>
  );
};
