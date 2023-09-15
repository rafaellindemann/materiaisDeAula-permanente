import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class TelaCrudContas extends JFrame{
    private JTextField txtConta;
    private JTextField txtValor;
    private JButton btnCadastrar;
    private JButton btnLocalizar;
    private JButton btnEditar;
    private JButton btnDeletar;
    private JTextArea txtRelatorios;
    public JPanel painelPrincipal;
    private JButton btnMostrarTodos;
    private JButton btnFakes;
    private int alvo = -1;
    static ArrayList<Conta> contas = new ArrayList<Conta>();

    public void limparEntradas(){
        txtConta.setText("");
        txtValor.setText("");
        txtConta.requestFocus();
    }
    public void mostrarTodosRegistros(){
        String texto = "";
        for (Conta c : contas) {
            texto += "\n--------------\nID: " + contas.indexOf(c) + "\n";
            texto += c.mostrarEstado();
        }
        txtRelatorios.setText(texto);
    }
public TelaCrudContas() {
    btnCadastrar.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            contas.add(new Conta(txtConta.getText(), Float.parseFloat(txtValor.getText())));
            mostrarTodosRegistros();
            limparEntradas();
        }
    });
    btnLocalizar.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
                for (Conta c: contas) {
                    if (c.getNome().equals(txtConta.getText())){
                        txtValor.setText(Float.toString(c.getValor()));
                        alvo = contas.indexOf(c);
                    }
                }
        }
    });
    btnEditar.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            if(alvo != -1){
                contas.get(alvo).setNome(txtConta.getText());
                contas.get(alvo).setValor(Float.parseFloat(txtValor.getText()));
                alvo = -1;
                mostrarTodosRegistros();
                limparEntradas();
            }else {
                JOptionPane.showMessageDialog(painelPrincipal, "Primeiro tem que pesquisar...");
            }
        }
    });
    btnDeletar.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            if(alvo != -1){
                contas.remove(alvo);
                alvo = -1;
                mostrarTodosRegistros();
                limparEntradas();
            }else {
                JOptionPane.showMessageDialog(painelPrincipal, "Primeiro tem que pesquisar...");
            }
        }
    });
    btnMostrarTodos.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            mostrarTodosRegistros();
        }
    });
    btnFakes.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            contas.add(new Conta("Aluguel", 1000f));
            contas.add(new Conta("Netflix", 50f));
            contas.add(new Conta("Cartão", 129.9f));
            contas.add(new Conta("Luz", 234.78f));
            mostrarTodosRegistros();
        }
    });
}
}
