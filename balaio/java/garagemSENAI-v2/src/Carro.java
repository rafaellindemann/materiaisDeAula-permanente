public class Carro {
    private String modelo;
    private int capTanque;
    private int qtdTanque;
    private String cor;
    private int km;

    public String mostrarEstado(){
        return "Modelo: " + this.modelo + "\nCapTanque: " + this.capTanque +
                "\nqtdTanque: " + this.qtdTanque + "\nCor: " + this.cor +
                "\nKM: " + this.km;
    }

    public void registrarKM(int novaKm){
        if(novaKm > this.km){
            this.km = novaKm;
        }
    }
    public void abastecer(){
        this.qtdTanque = this.capTanque;
    }

    public void pintar(String novaCor){
        this.cor = novaCor;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getCapTanque() {
        return capTanque;
    }

    public void setCapTanque(int capTanque) {
        this.capTanque = capTanque;
    }

    public int getQtdTanque() {
        return qtdTanque;
    }

    public void setQtdTanque(int qtdTanque) {
        this.qtdTanque = qtdTanque;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public int getKm() {
        return km;
    }

    public void setKm(int km) {
        this.km = km;
    }
}
