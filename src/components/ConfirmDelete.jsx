'use client';

import { Button, Modal } from 'flowbite-react';
import { toast } from 'react-hot-toast';

const ConfirmDelete = ({
  showPostDeleteModal,
  setShowPostDeleteModal,
  deletingPostId,
  refetch,
}) => {
  const handleDeletePost = () => {
    fetch(
      `https://blogify-blog-app-server-production.up.railway.app/api/posts/${deletingPostId}`,
      {
        method: 'DELETE',
      }
    )
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          refetch();
          toast.success('Post deleted successfully');
        }
      });
  };

  return (
    <Modal
      onClose={() => setShowPostDeleteModal(false)}
      show={showPostDeleteModal}
      popup
      size="md"
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            <p>Are you sure you want to delete this post?</p>
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="failure"
              onClick={() => {
                handleDeletePost();
                setShowPostDeleteModal(false);
              }}
            >
              Yes, I&apos;m sure
            </Button>
            <Button color="gray" onClick={() => setShowPostDeleteModal(false)}>
              <p>No, cancel</p>
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmDelete;
