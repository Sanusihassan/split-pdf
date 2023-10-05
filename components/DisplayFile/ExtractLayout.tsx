import { FileCardProps } from "@/src/globalProps";
import FileCard from "./FileCard";
export const ExtractLayout = ({
  file,
  errors,
  loader_text,
  fileDetailProps,
  extension,
}: FileCardProps) => {
  return (
    <>
      <FileCard
        errors={errors}
        file={file}
        loader_text={loader_text}
        fileDetailProps={fileDetailProps}
        extension={extension}
        layout="extract"
      />
    </>
  );
};
