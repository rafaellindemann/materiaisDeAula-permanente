import javax.swing.*;

public class Main {
    public static void main(String[] args) {

        TelaCrudContas telaCrudContas = new TelaCrudContas();
        telaCrudContas.setContentPane(telaCrudContas.painelPrincipal);
        telaCrudContas.setTitle("Garagem");
        telaCrudContas.setSize(800,600);
        telaCrudContas.setVisible(true);
        telaCrudContas.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        telaCrudContas.limparEntradas();

    }
}