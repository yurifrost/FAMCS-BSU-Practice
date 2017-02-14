package com.yuri;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.math.BigInteger;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Scanner;
import java.util.Set;

public class Main {

    public static void main(String[] args) {
        Set<BigInteger> st = new HashSet<>();
        BigInteger sum = new BigInteger("0");
        try {
                Scanner sc = new Scanner(new File(("in.txt")));
            while (sc.hasNextBigInteger()) {
                st.add(sc.nextBigInteger());
            }
            Iterator<BigInteger> it = st.iterator();
            while(it.hasNext()) {
                sum = sum.add(it.next());
            }
            String sumStr = sum.toString();
            FileWriter out = new FileWriter("out.txt");
            out.write(sumStr);
            out.close();
            System.out.println(sumStr);
        }catch(IOException e){}
    }
}

