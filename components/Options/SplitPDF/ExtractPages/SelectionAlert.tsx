import { InformationCircleIcon } from "@heroicons/react/solid";

export const SelectionAlert = ({ selectedPages }: { selectedPages: number }) => {
    return (
        <div className="alert alert-info">
            <InformationCircleIcon className="w-5 h-5" /> Every selected page of this
            PDF file will be converted in one PDF file.
            <strong>{selectedPages} PDF</strong> will be created.
        </div>
    );
};