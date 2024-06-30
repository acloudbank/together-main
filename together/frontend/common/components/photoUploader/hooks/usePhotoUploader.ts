import { useState } from 'react';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

type UsePhotoUploader = {
    fileList: UploadFile[];
    onChange: UploadProps['onChange'];
    onPreview: (file: UploadFile) => void;
};

export function usePhotoUploader(): UsePhotoUploader {
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    return {
        fileList,
        onChange,
        onPreview,
    };
};
