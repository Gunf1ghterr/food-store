import React, { Component } from 'react';
import './App.css';

interface AppState {
  users: { name: string }[];
}

class App extends Component<{}, AppState> {
  private socket: WebSocket | null = null;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    if (!this.socket) {
      this.socket = new WebSocket('ws://localhost/notification');

      this.socket.onopen = () => {
        console.log('Соединение установлено');
      };
    }

    this.socket.onmessage = (event) => {
      console.log(event.data);
      const m = document.createElement('div');
      m.innerHTML = event.data;
      document.body.appendChild(m);
    };

    this.socket.onclose = (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }
    };

    this.socket.onerror = (error) => {
      console.log('Ошибка', error);
    };
  }

  

  getUsers = async () => {
    let response = await fetch('/api/users', {
      method: 'GET',
    });
    let data = await response.json();
    this.setState({ users: data });
  };

  sendMsg = () => {
    if (this.socket) {

      this.socket.send('Hello');
    } else {
      console.log('Соединение не установлено.');
    }
  }

  render() {
    const users = this.state.users.map((item: any, index: React.Key | null | undefined) => (
      <li key={index}>{item.name}</li>
    ));

    return (
      <div className="App">
        <button onClick={this.sendMsg}>Отправить сообщение</button>
        <button onClick={this.getUsers}>Получить пользователей</button>
        <ul>{users}</ul>
      </div>
    );
  }
}

export default App;
