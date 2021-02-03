import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Toast } from 'react-bootstrap';
import { Dispatch } from 'redux';
import IToast from '../../../stores/toasts/models/IToast';
import * as ToastsAction from '../../../stores/toasts/ToastsAction';

interface IProps {
    readonly item: IToast;
}

const ToastCard: React.FC<IProps> = (
    props: React.PropsWithChildren<IProps>
) => {
    const dispatch: Dispatch = useDispatch();
    const onClickRemoveNotification = useCallback((): void => {
        dispatch(ToastsAction.removeById(props.item.id));
    }, [dispatch, props.item.id]);

    return (
        <Toast key={props.item.id} onClose={onClickRemoveNotification}>
            <Toast.Header>
                <strong className="mr-auto">{props.item.type}</strong>
            </Toast.Header>
            <Toast.Body>{props.item.message}</Toast.Body>
        </Toast>
    );
};

export default ToastCard;
