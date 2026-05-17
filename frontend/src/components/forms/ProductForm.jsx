import Input from '../ui/Input';
import Button from '../ui/Button'


export default function ProductForm() {

    return (
        <form>
            <Input
                placeholder="Nome do produto"
            />

            <Input
                placeholder="Estoque"
            />

            <Input
                placeholder="Preço"
            />

            <Button title="Salvar Produto" />
        </form>
    )
}