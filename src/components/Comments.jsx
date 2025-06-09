import React, { useContext, useState } from "react";
import { getInitials } from "../utils/utilities";
import axios from "axios";
import toast from "react-hot-toast";
import { Context, server } from "../main";
import { deleteCommentIcon } from "../data/icons";

const Comments = ({ comments, cardId, action }) => {
  /**-----------------------------------------------------------------------
   * @Context: utilize content
   -----------------------------------------------------------------------*/
  const { setRefresh } = useContext(Context);

  /**-----------------------------------------------------------------------
   * @Hook: setNewComment
   * Allows the user to add a new comment
   -----------------------------------------------------------------------*/
  const [newComment, setNewComment] = useState("");

  /**-----------------------------------------------------------------------
   * @Function: handleAddNewComment
   * @Params:
   * @Returns: none
   * Used to create a new comment for a card
   -----------------------------------------------------------------------*/
  const handleAddNewComment = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/comments/createComment`,
        {
          comment: newComment,
          card: cardId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setRefresh((prev) => !prev);
      setNewComment("");
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  /**-----------------------------------------------------------------------
   * @Function: handleDeleteComment
   * @Params: commend id <String>
   * @Returns: none
   * Used to delete comment added by a user
   -----------------------------------------------------------------------*/
  const handleDeleteComment = async (commentId, event) => {
    event.preventDefault();
    try {
      const { data } = await axios.delete(
        `${server}/comments/deleteMyComment/` + commentId,
        {
          withCredentials: true,
        }
      );

      setRefresh((prev) => !prev);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col gap-y-3">
      <div className="text-3xl font-semibold text-(--board-bg--color)">
        Comments
      </div>
      <div className="flex flex-col gap-y-5">
        {/* New comment */}
        <form
          className={`flex flex-row gap-x-4 bg-gray-100 p-3 rounded-lg ${
            action === "update" ? "visible" : "hidden"
          }`}
        >
          <input
            className="w-full bg-white text-(--board-bg--color) focus:ring-3 focus:ring-(--user-icon--bg-color--lavender) outline-hidden rounded-lg p-2"
            placeholder="Add comment"
            type="text"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          />
          <button
            onClick={handleAddNewComment}
            className="px-8 py-3 font-bold rounded-lg bg-(--user-icon--bg-color--lavender) hover:ring-4 ring-(--button-bg--color) ring-offset-4 ring-offset-(--background-white) transition delay-150 ease-in-out text-white"
          >
            Add
          </button>
        </form>

        {/* Existing comments */}
        <div className="flex flex-col gap-y-3 w-full">
          {comments.map((comment) => {
            if (comment.card == cardId) {
              return (
                <div
                  key={comment._id}
                  className="grid grid-cols-10 w-full p-3 bg-gray-100 rounded-lg"
                >
                  <div className="col-span-1">
                    <div className="flex items-center font-semibold h-11 w-11 p-3 rounded-full text-(--primary-dark--text-color) bg-orange-400">
                      {getInitials(comment.user).initials}
                    </div>
                  </div>
                  <div className="col-span-9 flex flex-col gap-y-2">
                    <div className="font-semibold flex flex-row justify-between w-full text-(--board-bg--color)">
                      <div>{getInitials(comment.user).userName}</div>
                      <button
                        className={`text-gray-500 hover:text-black transition ease-in-out duration-150 ${
                          action === "update" ? "visible" : "hidden"
                        }`}
                        onClick={(event) =>
                          handleDeleteComment(comment._id, event)
                        }
                      >
                        {deleteCommentIcon}
                      </button>
                    </div>
                    <div className="text-justify text-(--board-bg--color)">
                      {comment.comment}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
