import type { ConfirmDeleteModalProps } from "../interfaces/types";


export const ConfirmDeleteModal = ({ habitName, onCancel, onConfirm }: ConfirmDeleteModalProps) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex justify-center items-center z-50">
      <div className="bg-white p-6 border-2 rounded-md shadow-lg w-80 text-center font-patrick">
        <p className="text-lg mb-4">Are you sure you want to delete<strong>{habitName}</strong>?</p>
        <div className="flex justify-center gap-4">
          <button onClick={onCancel} className="border-2 text-red-600 px-4 py-1 rounded cursor-pointer">Cancel</button>
          <button onClick={onConfirm} className="border-2 text-black px-4 py-1 rounded cursor-pointer">Delete</button>
        </div>
      </div>
    </div>
  );
};
