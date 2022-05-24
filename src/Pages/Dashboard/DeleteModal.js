import React from 'react';

const DeleteModal = ({ delute }) => {
    const deleteOrder = () => {
        console.log('sala dure giya mor tor kono dorkar nai amamr');
    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal">

                <div class="modal-box">
                    <label for="delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-accent text-center font-bold text-2xl">{delute.tool}</h3>
                    <p class="py-4">Are You sure want to delete {delute.tool}</p>
                    <div class="modal-action">
                        <label onClick={deleteOrder} for="delete-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;