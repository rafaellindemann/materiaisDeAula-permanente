import javax.swing.*;
import java.util.ArrayList;

public class Main {
    //static ArrayList<Carro> garagem = new ArrayList<Carro>();
    public static void main(String[] args) {

        TelaGaragem tg = new TelaGaragem();
        tg.setContentPane(tg.painelPrincipal);
        tg.setTitle("Garagem");
        tg.setSize(800,600);
        tg.setVisible(true);
        tg.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}