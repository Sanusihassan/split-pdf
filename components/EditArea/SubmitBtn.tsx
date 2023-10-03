import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useFileStore } from "../../src/file-store";
import { ToolState, setIsSubmitted, setShowOptions } from "../../src/store";
import type { edit_page } from "../../content";
export function SubmitBtn({ k, edit_page }: { k: string, edit_page: edit_page }): JSX.Element {
  const state = useSelector((state: { tool: ToolState }) => state.tool);
  const dispatch = useDispatch();
  const { submitBtn } = useFileStore.getState();
  return (
    <button
      className={`submit-btn btn btn-lg text-white position-relative overflow-hidden ${k} grid-footer`}
      onClick={() => {
        dispatch(setIsSubmitted(true));
        dispatch(setShowOptions(false));
        if (submitBtn) {
          submitBtn?.current?.click();
        }
      }}
      disabled={state!.errorMessage.length > 0 || state.selectedPages.length === 0}
    >
      <bdi>
        {
          edit_page.action_buttons[
          k.replace(/-/g, "_") as keyof typeof edit_page.action_buttons
          ]
        }
      </bdi>{" "}
      {state?.isSubmitted ? (
        <Spinner
          as="span"
          animation="grow"
          role="status"
          aria-hidden="true"
        />
      ) : null}
    </button>
  );
}