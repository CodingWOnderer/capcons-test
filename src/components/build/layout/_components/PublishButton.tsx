import { useUpdateCircleTemplate } from "@/hooks/api/templates/queries";
import { useEditorStore } from "../../store/editor.store";
import { Button } from "@/components/v1/button/button";

export default function PublishButton() {
  const publishPage = useEditorStore((s) => s.publishTemplate);
  const { mutateAsync: templatePublishMutation, isPending } =
    useUpdateCircleTemplate();

  const handlePublish = async () => {
    const publishedData = publishPage();

    if (!publishedData) {
      console.error("Failed to get publish data");
      return;
    }

    const mutationData = {
      data: {
        _id: publishedData?.templateId ?? "",
        name: publishedData?.templateName ?? "",
        preview: "",
        description: "",
        category: "",
        font: publishedData?.font ?? "",
        pages: publishedData?.templatePages.map((page) => ({
          _id: page.pageId,
          name: page.pageName,
          template_id: publishedData.templateId,
          website_page_state: page.websitePageState,
          path: "",
          preview: "",
          description: "",
        })),
      },
    };
    await templatePublishMutation(mutationData);
  };

  return (
    <Button
      size={"sm"}
      onClick={handlePublish}
      className="rounded-md cursor-pointer text-xs/5 font-medium h-7 p-2"
    >
      {isPending ? "Publishing..." : "Publish"}
    </Button>
  );
}
