'use client';

import { Button, Modal } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-hot-toast';

const ConfirmDelete = ({ showModal, setShowModal, id }) => {
  const handleDeletePost = () => {
    fetch(`http://localhost:3000/api/v1/blogs/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('Post deleted successfully');
        }
      });
  };

  return (
    <Modal
      onClose={() => {}}
      show={showModal}
      popup
      size="md"
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          {/* <G className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            <p>Are you sure you want to delete this post?</p>
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="failure"
              onClick={() => {
                handleDeletePost();
                setShowModal(false);
              }}
            >
              Yes, I'm sure
            </Button>
            <Button color="gray" onClick={() => setShowModal(false)}>
              <p>No, cancel</p>
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmDelete;
