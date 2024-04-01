import { ComponentLoader } from 'adminjs'
import { bundle } from "@adminjs/bundler"
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentLoader = new ComponentLoader()

const Components = {
     MyInput: componentLoader.add('MyInput',path.resolve(__dirname,'image-input')),
     Confimed: componentLoader.add('SendMessage',path.resolve(__dirname,'send-message'))
    // other custom components
}

export { componentLoader, Components }