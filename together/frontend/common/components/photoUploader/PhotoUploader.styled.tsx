import { Upload, styled } from "ui";

export const PhotoUpload = styled(Upload)`
    .ant-upload-select {
        border: none !important;
        width: auto !important;
        text-decoration: underline;
    }
    .ant-upload-list-item-container {
        width: 100% !important;
        height: 300px !important;
    }
    .ant-upload-list-item-thumbnail img{
        object-fit : fill !important;
    }
`;