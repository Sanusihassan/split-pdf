import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "如何在线拆分PDF？",
    description: "使用我们的在线工具将PDF文件拆分为多个文档的简单步骤。",
    step: [
        {
            "@type": "HowToStep",
            name: "步骤 1",
            text: "在PDFEquips上打开拆分PDF工具。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 2",
            text: "拖放PDF文件或点击'选择PDF文件'按钮上传您的PDF。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 3",
            text: "选择您的拆分选项：'按范围拆分'或'提取页面'。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 4",
            text: "点击'拆分PDF'按钮处理您的文件。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 5",
            text: "下载拆分后的PDF文件到您的设备。"
        }
    ]
};
