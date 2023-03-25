import Vue from "vue";
import { Aside, Button, Container, Form, FormItem, Header, Input, Main, Message, Switch, MessageBox, Table, TableColumn, Dialog, Select, Option, Card, Divider, Pagination } from "element-ui";
const plugins = [
  Button, Header, Container, Aside, Main, Form, FormItem, Input, Switch, Table, TableColumn, Dialog, Select, Option, Card, Divider, Pagination
]

function getElement(app) {
  plugins.forEach((item => {
    return app.use(item)
  }))
}

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

getElement(Vue)