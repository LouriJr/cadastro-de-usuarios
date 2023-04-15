import React, { useEffect, useRef, useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

registerPlugin(FilePondPluginFileEncode);
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function SeletorDeImagem({ setImagem, imagem }) {
    const [filePongImage, setFilePongImage] = useState([]);

    useEffect(() => {
        if (imagem) {
            fetch(imagem)
                .then((res) => res.blob())
                .then(blob => {
                    const file = new File([blob], "", { type: "image/jpg" })
                    setFilePongImage([file]);
                })
        }
    }, [])

    return (
        <div className="App">
            <FilePond
                files={filePongImage}
                onupdatefiles={(fileItems) => {
                    const image = fileItems[0].getFileEncodeDataURL((base64) => {
                        return base64;
                    });
                    setFilePongImage(fileItems);
                    setImagem(image);
                }}
                labelIdle='Arraste ou <span class="filepond--label-action">selecione</span> seus arquivos'
            />
        </div>
    );
}
