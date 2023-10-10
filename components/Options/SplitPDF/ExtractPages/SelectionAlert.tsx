import { edit_page } from "@/content";
import { InformationCircleIcon } from "@heroicons/react/solid";

export const SelectionAlert = ({ selectedPages, content, lang }: {
    selectedPages: number;
    content: edit_page["options"]["extract_pages_options"]["selection_alert_content"];
    lang: string;
}) => {
    return (
        <div className="alert alert-info">
            <InformationCircleIcon className="w-5 h-5" /> {content.selection_alert}
            {"ar" === lang ?
                <>
                    {/* {content.will_be_created} */}
                    سيتم إنشاء{" "}
                    <strong>
                        <bdi>
                            {selectedPages} {selectedPages == 1 ? "ملف PDF واحد" : "ملفات PDF"}
                        </bdi>
                    </strong>
                </> :
                <>
                    <strong>{selectedPages} PDF</strong> {content.will_be_created}
                </>
            }
        </div>
    );
};