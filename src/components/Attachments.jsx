import UIImage from "../assets/Kanban_Board_UI.png";
import { deleteCommentIcon, downloadIcon } from "../data/icons";

const Attachments = ({ action }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="text-3xl font-semibold text-[color:var(--board-bg--color)]">
        Attachments
      </div>
      <div className="grid grid-cols-3 gap-x-2 gap-y-4">
        <div className="flex flex-row justify-between px-5 py-3 rounded-lg shadow-md bg-gray-200">
          <div className="w-[80%] overflow-hidden text-ellipsis line-clamp-1">
            Attachment Attachment Attachment
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <a href={UIImage} download="Example">
              <button
                className={`text-gray-500 hover:text-black transition ease-in-out duration-150`}
              >
                {downloadIcon}
              </button>
            </a>

            <button
              onClick={() => alert("Attachment is deleted")}
              className={`text-gray-500 hover:text-black transition ease-in-out duration-150 ${
                action == "update" ? "visible" : "hidden"
              }`}
            >
              {deleteCommentIcon}
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between px-5 py-3 rounded-lg shadow-md bg-gray-200">
          <div className="w-[80%] overflow-hidden text-ellipsis line-clamp-1">
            Attachment 2
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <a href={UIImage} download="Example">
              <button
                className={`text-gray-500 hover:text-black transition ease-in-out duration-150`}
              >
                {downloadIcon}
              </button>
            </a>
            <button
              onClick={() => alert("Attachment is deleted")}
              className={`text-gray-500 hover:text-black transition ease-in-out duration-150 ${
                action == "update" ? "visible" : "hidden"
              }`}
            >
              {deleteCommentIcon}
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between px-5 py-3 rounded-lg shadow-md bg-gray-200">
          <div className="w-[80%] overflow-hidden text-ellipsis line-clamp-1">
            Attachment 3
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <a href={UIImage} download="Example">
              <button
                className={`text-gray-500 hover:text-black transition ease-in-out duration-150`}
              >
                {downloadIcon}
              </button>
            </a>
            <button
              onClick={() => alert("Attachment is deleted")}
              className={`text-gray-500 hover:text-black transition ease-in-out duration-150 ${
                action == "update" ? "visible" : "hidden"
              }`}
            >
              {deleteCommentIcon}
            </button>
          </div>
        </div>

        {/* This element will be separated from the mapped attachments */}
        <div className="flex flex-row justify-between px-5 py-3 rounded-lg bg-white border-4 border-dashed border-gray-400">
          <form method="POST">
            <label
              for="file"
              className="overflow-hidden text-ellipsis line-clamp-1 text-gray-500 hover:cursor-pointer"
            >
              Upload file
            </label>
            <input
              type="file"
              name="file"
              id="file"
              placeholder="Upload"
              className="hidden"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Attachments;
