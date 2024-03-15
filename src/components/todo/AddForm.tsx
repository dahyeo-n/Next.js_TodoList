'use client';

import { useAddFormHandler } from '@/hooks/useAddFormHandler';

const AddForm = () => {
    const { onChangeFormValue, onSubmitForm } = useAddFormHandler();
    return (
        <form onSubmit={onSubmitForm}>
            <label>
                Title: <input type="text" name="title" onChange={onChangeFormValue} />
            </label>
            <label>
                Contents: <input type="text" name="contents" onChange={onChangeFormValue} />
            </label>
            <button type="submit">등록</button>
        </form>
    );
};

export default AddForm;
