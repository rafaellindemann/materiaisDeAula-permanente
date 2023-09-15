import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class TelaGaragem extends JFrame{
    static ArrayList<Carro> garagem = new ArrayList<Carro>();
    private int alvo = -1;
    public JPanel painelPrincipal;
    private JTextField txtModelo;
    private JTextField txtCapacidade;
    private JTextField txtQuantidade;
    private JTextField txtCor;
    private JTextField txtKM;
    private JButton btnCadastrar;
    private JButton btnTeste;
    private JTextArea txtRelatorios;
    private JButton btnMostrarTodos;
    private JButton btnFakes;
    private JButton btnLocalizar;
    private JButton btnEditar;

    public void mostrarTodosCarros(){
        String texto = "=================\n";
        for (Carro carro : garagem) {
            texto += "ID: " + garagem.indexOf(carro) +"\n";
            texto += carro.mostrarEstado();
            texto += "\n-----------------\n";
        }
        txtRelatorios.setText(texto);
    }

    public void criarFakes(){
        Carro c = new Carro();
        c.setModelo("Fusca");
        c.setCapTanque(100);
        c.setQtdTanque(50);
        c.setCor("Azul");
        c.setKm(333333);
        garagem.add(c);

        c = new Carro();
        c.setModelo("Fuscão");
        c.setCapTanque(300);
        c.setQtdTanque(10);
        c.setCor("Preto");
        c.setKm(999999);
        garagem.add(c);

        c = new Carro();
        c.setModelo("Belina");
        c.setCapTanque(150);
        c.setQtdTanque(150);
        c.setCor("Bege");
        c.setKm(123456);
        garagem.add(c);
        JOptionPane.showMessageDialog(null, "Fakes criados para teste");
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

            txtModelo.setText("");
            txtCapacidade.setText("");
            txtQuantidade.setText("");
            txtCor.setText("");
            txtKM.setText("");
            txtModelo.requestFocus();

            System.out.println(garagem.get(0).mostrarEstado());
            //txtRelatorios.setText(Main.garagem.get(0).mostrarEstado());

        }
    });
    btnTeste.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {

        }
    });
        btnMostrarTodos.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                mostrarTodosCarros();
            }
        });
        btnFakes.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                criarFakes();
            }
        });
        btnLocalizar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String modeloProcurado = txtModelo.getText();
                for (Carro carro : garagem) {
                    System.out.println("\nCarro: "+carro.getModelo() + " Modelo proc: "+modeloProcurado);
//                    if (carro.getModelo().equals(modeloProcurado)){
                    if (carro.getModelo().equalsIgnoreCase(modeloProcurado)){
                        txtCapacidade.setText(Integer.toString(carro.getCapTanque()));
                        txtQuantidade.setText(Integer.toString(carro.getQtdTanque()));
                        txtCor.setText(carro.getCor());
                        txtKM.setText(Integer.toString(carro.getKm()));
                        alvo = garagem.indexOf(carro);
                        System.out.println("Alvo: "+alvo);
                    }
                }
                if (alvo == -1){
                    JOptionPane.showMessageDialog(null,"Não tem carro com esse modelo...");
                }
            }
        });
        btnEditar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(alvo != -1){
                    // *** salvar em alvo
                }else{
                    JOptionPane.showMessageDialog(null, "Você deve encontrar o carro antes de tentar salvar...");
                }
            }
        });
    }
}
