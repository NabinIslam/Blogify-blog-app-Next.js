'use client';

import app from '@/firebase/firebase.config';
import { getAuth, signOut } from 'firebase/auth';
import { Button, Modal } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-hot-toast';

const ConfirmLogout = ({ showModal, setShowModal, router }) => {
  const auth = getAuth(app);

  return (
    <Modal onClose={() => setShowModal(false)} show={showModal} popup size="md">
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          {/* <G className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            <p>Are you sure you want to logout?</p>
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="failure"
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    router.push('/login');
                    toast('Logout successful 🎉');
                  })
                  .catch(error => {
                    console.error(error);
                  });
                setShowModal(false);
                router.push('/');
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

export default ConfirmLogout;
