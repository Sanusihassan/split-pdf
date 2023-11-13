import { useFileStore } from "@/src/file-store";
import { useEffect, useState } from "react";
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  OptionProps,
  StylesConfig,
} from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { ToolState, setSelectedFile } from "@/src/store";
const THEME_COLOR = "#fd7e14";
const customStyles: StylesConfig<{ value: string; label: string }, false> = {
  option: (
    base: CSSObjectWithLabel,
    state: OptionProps<
      { value: string; label: string },
      false,
      GroupBase<{ value: string; label: string }>
    >
  ) => ({
    ...base,
    backgroundColor: state.isSelected ? THEME_COLOR : "white",
    cursor: "pointer",
  }),
};
export const SelectedFiles = ({
  select_files_placeholder,
}: {
  select_files_placeholder: string;
}) => {
  const { files } = useFileStore();
  const [selecteFiles, setSelectedFiles] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);

  const dispatch = useDispatch();
  const selectedFile = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedFile
  );
  useEffect(() => {
    const newSelectedFiles = files.map((file) => ({
      label: file.name,
      value: file.name,
    }));
    if (selectedFile == "" && selecteFiles.length > 0) {
      dispatch(setSelectedFile(selecteFiles[0].value));
    }

    setSelectedFiles(newSelectedFiles);
  }, [files]);
  return (
    <>
      <div className="selected-files row justify-content-center align-items-center">
        <Select
          className="cursor-pointer col-6 bg-white"
          defaultValue={selecteFiles[0]}
          options={selecteFiles}
          styles={customStyles}
          onChange={(v) => {
            if (v) {
              dispatch(setSelectedFile(v.value));
            }
          }}
          placeholder={select_files_placeholder}
        />
      </div>
    </>
  );
};
