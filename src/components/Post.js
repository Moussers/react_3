import React from "react";

class Post extends React.Component
{
    render()
    {
        return (
            <fieldset key={ this.props.id }>
                <legend style={{ fontWeight: 'bold' }} >{ this.props.title }</legend>
                {/*{{}} - так пишутся локальные стили в React*/}
                <p>{this.props.description}</p>
            </fieldset>
        )
    }
}
export default Post;