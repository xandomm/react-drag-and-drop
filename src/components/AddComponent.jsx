import React, { useState } from "react";
import { add } from "../redux/cardSlice";
import { useAppDispatch } from "../redux/hooks";
import uuid from "uuid/v4";
const Form = () => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  const onSubmit = () => {
    dispatch(
      add({
        id: uuid(),
        content: name,
      })
    );
  };

  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add a component for list
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                class="form-control form-control-lg"
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Task Name"
                aria-label=".form-control-lg example"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={onSubmit}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
