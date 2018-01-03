var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'contactItem'}>
        <img className={'logo'} src={'http://logosrated.net/wp-content/uploads/parser/React-Logo-1.png'}/>
        <h1 className={'header'}>
            Exercise App
        </h1>
        <input className={'firstName'} type={'text'} placeholder={'Imię'} value={this.props.contact.firstName}/>
        <input className={'lastName'} type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}/>
        <input className={'email'} type={'text'} placeholder={'Email'} value={this.props.contact.email}/>
        <button className={'btn'} type={'submit'}>
          Add Contact
        </button>
      </form>
    )
  },
})