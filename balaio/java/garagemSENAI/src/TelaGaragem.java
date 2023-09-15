import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class TelaGaragem extends JFrame{
    static ArrayList<Carro> garagem = new ArrayList<Carro>();
    public JPanel painelPrincipal;
    private JTextField txtModelo;
    private JTextField txtCapacidade;
    private JTextField txtQuantidade;
    private JTextField txtCor;
    private JTextField txtKM;
    private JButton btnCadastrar;
    private JButton btnTeste;
    private JTextArea txtRelatorios;
    private JButton btnLocalizar;
    private JButton btnFakes;
    private JButton btnEditar;
    private JButton btnDeletar;

    private int alvo = -1;
    public void criarFakes(){
        Carro c = new Carro("Kombi",300,100,"Branca",10000);
        garagem.add(c);

        garagem.add(new Carro("Fuscão",100,10,"Preto",99000));
        garagem.add(new Carro("Doblô",150,110,"Verde",9900));
    }
    public void limparCampos(){
        txtModelo.setText("");
        txtCapacidade.setText("");
        txtQuantidade.setText("");
        txtCor.setText("");
        txtKM.setText("");
        txtModelo.requestFocus();
    }
    public void mostrarTodosCarros(){
        String texto = "===============\n";
        for(Carro carro : garagem){
            texto += "ID: " + garagem.indexOf(carro) + "\n";
            texto += carro.mostrarEstado();
            texto += "\n---------------\n";
        }
        txtRelatorios.setText(texto);
    }
public TelaGaragem() {
    btnCadastrar.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {// cadastrar
            Carro c = new Carro();
            c.setModelo(txtModelo.getText());
            c.setCapTanque(Integer.parseInt(txtCapacidade.getText()));
            c.setQtdTanque(Integer.parseInt(txtQuantidade.getText()));
            c.setCor(txtCor.getText());
            c.setKm(Integer.parseInt(txtKM.getText()));
            garagem.add(c);

            mostrarTodosCarros();
            limparCampos();

            //System.out.println(garagem.get(0).mostrarEstado());
            //txtRelatorios.setText(garagem.get(0).mostrarEstado());
        }
    });
    btnTeste.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            mostrarTodosCarros();
        }
    });
    btnFakes.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            criarFakes();
            mostrarTodosCarros();
        }
    });
    btnLocalizar.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            String modeloProcurado = txtModelo.getText();
            for (Carro carro: garagem) {
                if(carro.getModelo().equals(modeloProcurado) ){
                    txtCapacidade.setText(Integer.toString(carro.getCapTanque()));
                    txtQuantidade.setText(Integer.toString(carro.getQtdTanque()));
                    txtCor.setText(carro.getCor());
                    txtKM.setText(Integer.toString(carro.getKm()));
                    alvo = garagem.indexOf(carro);
                }
            }
        }
    });
    btnEditar.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            if(alvo != -1){
                Carro c = garagem.get(alvo);
                c.setModelo(txtModelo.getText());
                c.setCapTanque(Integer.parseInt(txtCapacidade.getText()));
                c.setQtdTanque(Integer.parseInt(txtQuantidade.getText()));
                c.setCor(txtCor.getText());
                c.setKm(Integer.parseInt(txtKM.getText()));
                alvo = -1;
                mostrarTodosCarros();
                limparCampos();
            }else{
                JOptionPane.showMessageDialog(null, "Pesquise primeiro");
            }
        }
    });
    btnDeletar.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            if(alvo != -1){
                garagem.remove(alvo);
                alvo = -1;
                mostrarTodosCarros();
                limparCampos();
            }else{
                JOptionPane.showMessageDialog(null,"Pesquise antes");
            }
        }
    });
}
}
