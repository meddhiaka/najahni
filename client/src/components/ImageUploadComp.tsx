'use client';

import { SingleImageDropzone } from '@/components/SingleImageUploadNative';
import { useEdgeStore } from '@/lib/edgestore';
import { Dispatch, SetStateAction, useState } from 'react';

export function SingleImageDropzoneUsage({file, setFile} : {
  file: File | undefined,
  setFile: Dispatch<SetStateAction<File | undefined>>
}) {
  return (
    <div>
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
      />
    </div>
  );
}