public class Conta {
    private String nome;
    private float valor;

    public Conta(String nome, float valor) {
        this.nome = nome;
        this.valor = valor;
    }

    public String mostrarEstado(){
        return "Conta: " + this.nome + "\nValor R$: " + this.valor;
    }
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }
}
