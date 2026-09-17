const { useState } = React;

function MessageDisplay({ message }) {
    return React.createElement(
        'div',
        {
            style: {
                border: '1px solid #ccc',
                padding: '20px',
                borderRadius: '8px'
            }
        },
        React.createElement('h2', null, 'Message from Parent'),
        React.createElement('p', null, message)
    );
}

function ParentComponent() {
    const [message, setMessage] = useState(
        'Hello from the parent component!'
    );

    return React.createElement(
        'div',
        {
            style: {
                padding: '40px',
                textAlign: 'center'
            }
        },
        React.createElement('h1', null, 'React Props Example'),
        React.createElement(MessageDisplay, {
            message: message
        })
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    React.createElement(ParentComponent)
);
