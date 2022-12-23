function User({user}) {
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'test',
            email: 'testuser@korea.com'
        },
        {
            id: 2,
            username: '홍길동',
            email: 'gildong@korea.com'
        },
        {
            id: 3,
            username: '이순신',
            email: 'leess@korea.com'
        }
    ];

    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    );
}

export default UserList;