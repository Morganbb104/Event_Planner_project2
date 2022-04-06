const eventComment = document.querySelector('#event-comment');
const submitButton = document.querySelector('#submit-comment');

// function to catch the submission of the comment
const submitComment = async (event) =>{
    event.preventDefault();

    const fetchComment = await fetch('api/comments', {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(fetchComment),
    });

    //if the submission was a success, refresh event page!
    if(fetchComment.ok){
        document.location('')
    }
}