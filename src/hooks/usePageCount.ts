import { useState, useEffect } from "react";
import { useFileStore } from "../file-store";
import { calculatePages } from "../utils";

const usePageCount = async () => {
  const [pageCount, setPageCount] = useState(0);
  const { files } = useFileStore();
  const getPageCount = async () => {
    if (files) {
      setPageCount(await calculatePages(files[0]));
    }
  };
  useEffect(() => {
    getPageCount();
  }, [pageCount]);
  return [pageCount, setPageCount];
};

export default usePageCount;
