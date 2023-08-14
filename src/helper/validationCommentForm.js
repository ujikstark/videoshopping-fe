
export default function validateCommentForm (comment) {
    const errors = {};

    if (comment.username.length == 0) {
        errors.username = 'comment should not empty';
    }

    if (comment.comment.length == 0) {
        errors.comment = 'comment should not empty';
    }


    return errors;
}
