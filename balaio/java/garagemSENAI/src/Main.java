import javax.swing.*;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        TelaGaragem tg = new TelaGaragem();
        tg.setContentPane(tg.painelPrincipal);
        tg.setTitle("Garagem");
        tg.setSize(600,400);
        tg.setVisible(true);
        tg.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}