import React, {useContext} from "react";
import { Card, Feed, FeedDate } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";
import '../App.css';


const User = () => {
    const { email, firstName, lastName, phone, avatar } = useContext(UserContext)
  return (
    <Card>
      <Card.Content>
      <Card.Header>User</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <div className="avatar">
            <Feed.Label image={avatar} />
          </div>
          <Feed.Content>
            <Feed.Summary>
            {firstName} {lastName}
            </Feed.Summary>
            <Feed.Summary>
            email: <a>{email}</a>
            </Feed.Summary>
            <Feed.Summary>
            phone: {phone}
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
  </Card.Content>
</Card>
  )

}

export default User;