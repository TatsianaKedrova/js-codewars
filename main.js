class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert("Say hi: " + this.name)
  }
}

class Man extends {
  constructor(props) {
    this.props = props;
  }
  render() {
    return (
      <div>
{this.props.name} {this.props.age}
      </div>
    )
  }
}