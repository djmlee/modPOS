import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const ListExampleChat = () => (
  <div>
    <List>
      <Subheader>Active Servers</Subheader>
      <ListItem
        primaryText="Dinsdale Lee"
        leftAvatar={<Avatar src="images/ok-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="John Solano"
        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Sashary Morel"
        leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Zhi Huang"
        leftAvatar={<Avatar src="images/kerem-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Daniyel Naeem"
        leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
    </List>
    <Divider />
    <List>
      <Subheader>Inactive Servers</Subheader>
      <ListItem
        primaryText="Hector Tapias"
        leftAvatar={<Avatar src="images/chexee-128.jpg" />}
      />
      <ListItem
        primaryText="Md Sajid"
        leftAvatar={<Avatar src="images/jsa-128.jpg" />}
      />
    </List>
  </div>
);

export default ListExampleChat;
