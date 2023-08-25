import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import Alert from "./Alert";

class PostForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    submitHandler = (evt) => {
        evt.preventDefault();

        const {title} = this.state;

        if (!title.trim()) {
            this.props.showAlert('введите какое нибудь значение!')
            return 
        }

        const post = {
            title, id: Date.now().toString(),
        }

        this.props.createPost(post);
        this.setState({title: ''})
    }

    inputChangeHandler = (evt) => {
        this.setState(prev => ({
            ...prev, ...{
            [evt.target.name] : evt.target.value,
        }
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alertText && <Alert text={this.props.alertText}/>}
                <h1>Post form</h1>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Заголовок поста</label>
                    <input type="text"
                    className="form-control"
                    id="title"
                    value={this.state.title}
                    name="title" /* добавляем для универсальности обработчика инпутов */
                    onChange={this.inputChangeHandler}/>
                    <button type="submit" className="btn btn-primary">Создать</button>
                </div>
            </form>
        )
    }
}

// передаем компоненту необходимые экшены, теперь в этом компоненте можно будет использовать эти экшены. При этом она упадет в props и обращаться к ней нужно будет this.props.createPost(post) без диспатчей, чисто как к обычной функции
const mapDispatchToProps = {
    createPost: createPost,
    showAlert: showAlert,
}

// передаем в пропсы поля из стора и присваеваем их полю this.props.alertText
const mapStateToProps = (state) => {
    return {
        alertText: state.app.alertText
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)