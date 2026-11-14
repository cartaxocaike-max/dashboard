// Esta amostra acompanha dados-exemplo.csv e permite abrir o dashboard por file://.
const DADOS_DEMONSTRATIVOS = [{"id_venda":"V0143","data":"2025-11-14","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Sudeste","quantidade":1,"preco_unitario":"16.50"},{"id_venda":"V0184","data":"2025-04-24","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Centro-Oeste","quantidade":5,"preco_unitario":"16.50"},{"id_venda":"V0055","data":"2025-07-30","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Sudeste","quantidade":5,"preco_unitario":"16.50"},{"id_venda":"V0141","data":"2025-09-04","produto":"Brownie","categoria":"Sobremesa","regiao":"Sul","quantidade":3,"preco_unitario":"12.00"},{"id_venda":"V0049","data":"2025-01-19","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Nordeste","quantidade":3,"preco_unitario":"16.50"},{"id_venda":"V0161","data":"2025-05-26","produto":"Milkshake","categoria":"Sobremesa","regiao":"Sul","quantidade":2,"preco_unitario":"18.00"},{"id_venda":"V0144","data":"2025-12-14","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Norte","quantidade":3,"preco_unitario":"16.50"},{"id_venda":"V0051","data":"2025-03-17","produto":"X-Burger","categoria":"Lanche","regiao":"Nordeste","quantidade":5,"preco_unitario":"27.90"},{"id_venda":"V0059","data":"2025-11-29","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Sul","quantidade":2,"preco_unitario":"14.00"},{"id_venda":"V0197","data":"2025-05-06","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Centro-Oeste","quantidade":2,"preco_unitario":"14.00"},{"id_venda":"V0125","data":"2025-05-10","produto":"X-Burger","categoria":"Lanche","regiao":"Nordeste","quantidade":5,"preco_unitario":"27.90"},{"id_venda":"V0134","data":"2025-02-01","produto":"Brownie","categoria":"Sobremesa","regiao":"Sudeste","quantidade":2,"preco_unitario":"12.00"},{"id_venda":"V0009","data":"2025-09-16","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Norte","quantidade":2,"preco_unitario":"16.50"},{"id_venda":"V0012","data":"2025-12-03","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Nordeste","quantidade":1,"preco_unitario":"14.00"},{"id_venda":"V0058","data":"2025-10-26","produto":"Suco natural","categoria":"Bebida","regiao":"Norte","quantidade":2,"preco_unitario":"10.00"},{"id_venda":"V0080","data":"2025-08-10","produto":"X-Bacon","categoria":"Lanche","regiao":"Sudeste","quantidade":1,"preco_unitario":"32.90"},{"id_venda":"V0086","data":"2025-02-15","produto":"Refrigerante","categoria":"Bebida","regiao":"Sudeste","quantidade":3,"preco_unitario":"7.00"},{"id_venda":"V0022","data":"2025-10-16","produto":"X-Bacon","categoria":"Lanche","regiao":"Sul","quantidade":4,"preco_unitario":"32.90"},{"id_venda":"V0042","data":"2025-06-19","produto":"X-Bacon","categoria":"Lanche","regiao":"Sudeste","quantidade":2,"preco_unitario":"32.90"},{"id_venda":"V0015","data":"2025-03-06","produto":"Veggie","categoria":"Lanche","regiao":"Sudeste","quantidade":3,"preco_unitario":"29.50"},{"id_venda":"V0008","data":"2025-08-07","produto":"Refrigerante","categoria":"Bebida","regiao":"Nordeste","quantidade":4,"preco_unitario":"7.00"},{"id_venda":"V0167","data":"2025-11-06","produto":"Veggie","categoria":"Lanche","regiao":"Centro-Oeste","quantidade":5,"preco_unitario":"29.50"},{"id_venda":"V0157","data":"2025-01-30","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Centro-Oeste","quantidade":3,"preco_unitario":"16.50"},{"id_venda":"V0038","data":"2025-02-11","produto":"Veggie","categoria":"Lanche","regiao":"Norte","quantidade":2,"preco_unitario":"29.50"},{"id_venda":"V0107","data":"2025-11-09","produto":"Refrigerante","categoria":"Bebida","regiao":"Nordeste","quantidade":4,"preco_unitario":"7.00"},{"id_venda":"V0168","data":"2025-12-04","produto":"Veggie","categoria":"Lanche","regiao":"Norte","quantidade":3,"preco_unitario":"29.50"},{"id_venda":"V0185","data":"2025-05-25","produto":"X-Bacon","categoria":"Lanche","regiao":"Nordeste","quantidade":2,"preco_unitario":"32.90"},{"id_venda":"V0156","data":"2025-12-16","produto":"X-Bacon","categoria":"Lanche","regiao":"Sul","quantidade":1,"preco_unitario":"32.90"},{"id_venda":"V0099","data":"2025-03-15","produto":"Veggie","categoria":"Lanche","regiao":"Norte","quantidade":2,"preco_unitario":"29.50"},{"id_venda":"V0073","data":"2025-01-28","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Norte","quantidade":1,"preco_unitario":"14.00"},{"id_venda":"V0174","data":"2025-06-21","produto":"X-Bacon","categoria":"Lanche","regiao":"Sul","quantidade":2,"preco_unitario":"32.90"},{"id_venda":"V0119","data":"2025-11-30","produto":"Veggie","categoria":"Lanche","regiao":"Sul","quantidade":4,"preco_unitario":"29.50"},{"id_venda":"V0083","data":"2025-11-11","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Sudeste","quantidade":2,"preco_unitario":"14.00"},{"id_venda":"V0158","data":"2025-02-13","produto":"Refrigerante","categoria":"Bebida","regiao":"Sul","quantidade":1,"preco_unitario":"7.00"},{"id_venda":"V0117","data":"2025-09-26","produto":"Suco natural","categoria":"Bebida","regiao":"Nordeste","quantidade":2,"preco_unitario":"10.00"},{"id_venda":"V0019","data":"2025-07-20","produto":"Veggie","categoria":"Lanche","regiao":"Centro-Oeste","quantidade":5,"preco_unitario":"29.50"},{"id_venda":"V0091","data":"2025-07-16","produto":"Suco natural","categoria":"Bebida","regiao":"Nordeste","quantidade":1,"preco_unitario":"10.00"},{"id_venda":"V0191","data":"2025-11-01","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Sul","quantidade":2,"preco_unitario":"14.00"},{"id_venda":"V0034","data":"2025-10-24","produto":"Veggie","categoria":"Lanche","regiao":"Sul","quantidade":5,"preco_unitario":"29.50"},{"id_venda":"V0164","data":"2025-08-19","produto":"Suco natural","categoria":"Bebida","regiao":"Sudeste","quantidade":1,"preco_unitario":"10.00"},{"id_venda":"V0010","data":"2025-10-19","produto":"Refrigerante","categoria":"Bebida","regiao":"Nordeste","quantidade":4,"preco_unitario":"7.00"},{"id_venda":"V0126","data":"2025-06-12","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Norte","quantidade":1,"preco_unitario":"14.00"},{"id_venda":"V0139","data":"2025-07-24","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Nordeste","quantidade":5,"preco_unitario":"16.50"},{"id_venda":"V0113","data":"2025-05-13","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Nordeste","quantidade":2,"preco_unitario":"14.00"},{"id_venda":"V0061","data":"2025-01-02","produto":"X-Bacon","categoria":"Lanche","regiao":"Sudeste","quantidade":2,"preco_unitario":"32.90"},{"id_venda":"V0093","data":"2025-09-12","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Norte","quantidade":2,"preco_unitario":"16.50"},{"id_venda":"V0017","data":"2025-05-02","produto":"Veggie","categoria":"Lanche","regiao":"Sudeste","quantidade":4,"preco_unitario":"29.50"},{"id_venda":"V0110","data":"2025-02-06","produto":"Milkshake","categoria":"Sobremesa","regiao":"Norte","quantidade":3,"preco_unitario":"18.00"},{"id_venda":"V0063","data":"2025-03-07","produto":"Refrigerante","categoria":"Bebida","regiao":"Norte","quantidade":2,"preco_unitario":"7.00"},{"id_venda":"V0187","data":"2025-07-21","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Sul","quantidade":3,"preco_unitario":"14.00"},{"id_venda":"V0088","data":"2025-04-22","produto":"Refrigerante","categoria":"Bebida","regiao":"Sudeste","quantidade":4,"preco_unitario":"7.00"},{"id_venda":"V0016","data":"2025-04-27","produto":"Veggie","categoria":"Lanche","regiao":"Nordeste","quantidade":2,"preco_unitario":"29.50"},{"id_venda":"V0109","data":"2025-01-28","produto":"Veggie","categoria":"Lanche","regiao":"Centro-Oeste","quantidade":4,"preco_unitario":"29.50"},{"id_venda":"V0133","data":"2025-01-10","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Sudeste","quantidade":5,"preco_unitario":"16.50"},{"id_venda":"V0127","data":"2025-07-10","produto":"Milkshake","categoria":"Sobremesa","regiao":"Nordeste","quantidade":4,"preco_unitario":"18.00"},{"id_venda":"V0118","data":"2025-10-04","produto":"Brownie","categoria":"Sobremesa","regiao":"Nordeste","quantidade":1,"preco_unitario":"12.00"},{"id_venda":"V0026","data":"2025-02-22","produto":"X-Burger","categoria":"Lanche","regiao":"Sudeste","quantidade":3,"preco_unitario":"27.90"},{"id_venda":"V0005","data":"2025-05-27","produto":"Brownie","categoria":"Sobremesa","regiao":"Sudeste","quantidade":4,"preco_unitario":"12.00"},{"id_venda":"V0068","data":"2025-08-16","produto":"Milkshake","categoria":"Sobremesa","regiao":"Norte","quantidade":1,"preco_unitario":"18.00"},{"id_venda":"V0155","data":"2025-11-24","produto":"Milkshake","categoria":"Sobremesa","regiao":"Centro-Oeste","quantidade":3,"preco_unitario":"18.00"},{"id_venda":"V0138","data":"2025-06-15","produto":"X-Burger","categoria":"Lanche","regiao":"Norte","quantidade":4,"preco_unitario":"27.90"},{"id_venda":"V0078","data":"2025-06-17","produto":"Brownie","categoria":"Sobremesa","regiao":"Sudeste","quantidade":3,"preco_unitario":"12.00"},{"id_venda":"V0145","data":"2025-01-17","produto":"Refrigerante","categoria":"Bebida","regiao":"Sul","quantidade":3,"preco_unitario":"7.00"},{"id_venda":"V0013","data":"2025-01-12","produto":"Brownie","categoria":"Sobremesa","regiao":"Nordeste","quantidade":3,"preco_unitario":"12.00"},{"id_venda":"V0011","data":"2025-11-21","produto":"Suco natural","categoria":"Bebida","regiao":"Nordeste","quantidade":5,"preco_unitario":"10.00"},{"id_venda":"V0031","data":"2025-07-28","produto":"Veggie","categoria":"Lanche","regiao":"Sudeste","quantidade":4,"preco_unitario":"29.50"},{"id_venda":"V0069","data":"2025-09-14","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Centro-Oeste","quantidade":1,"preco_unitario":"16.50"},{"id_venda":"V0147","data":"2025-03-04","produto":"Suco natural","categoria":"Bebida","regiao":"Sudeste","quantidade":2,"preco_unitario":"10.00"},{"id_venda":"V0070","data":"2025-10-15","produto":"Refrigerante","categoria":"Bebida","regiao":"Sudeste","quantidade":3,"preco_unitario":"7.00"},{"id_venda":"V0169","data":"2025-01-30","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Sudeste","quantidade":3,"preco_unitario":"14.00"},{"id_venda":"V0172","data":"2025-04-13","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Centro-Oeste","quantidade":4,"preco_unitario":"16.50"},{"id_venda":"V0066","data":"2025-06-21","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Centro-Oeste","quantidade":2,"preco_unitario":"16.50"},{"id_venda":"V0186","data":"2025-06-25","produto":"X-Burger","categoria":"Lanche","regiao":"Norte","quantidade":2,"preco_unitario":"27.90"},{"id_venda":"V0089","data":"2025-05-28","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Norte","quantidade":1,"preco_unitario":"14.00"},{"id_venda":"V0136","data":"2025-04-27","produto":"Brownie","categoria":"Sobremesa","regiao":"Centro-Oeste","quantidade":5,"preco_unitario":"12.00"},{"id_venda":"V0096","data":"2025-12-05","produto":"Suco natural","categoria":"Bebida","regiao":"Centro-Oeste","quantidade":5,"preco_unitario":"10.00"},{"id_venda":"V0047","data":"2025-11-06","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Nordeste","quantidade":1,"preco_unitario":"16.50"},{"id_venda":"V0045","data":"2025-09-23","produto":"Brownie","categoria":"Sobremesa","regiao":"Centro-Oeste","quantidade":3,"preco_unitario":"12.00"},{"id_venda":"V0030","data":"2025-06-25","produto":"X-Burger","categoria":"Lanche","regiao":"Norte","quantidade":4,"preco_unitario":"27.90"},{"id_venda":"V0027","data":"2025-03-07","produto":"Suco natural","categoria":"Bebida","regiao":"Sudeste","quantidade":2,"preco_unitario":"10.00"},{"id_venda":"V0006","data":"2025-06-23","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Nordeste","quantidade":2,"preco_unitario":"16.50"},{"id_venda":"V0053","data":"2025-05-09","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Centro-Oeste","quantidade":4,"preco_unitario":"16.50"},{"id_venda":"V0020","data":"2025-08-12","produto":"Refrigerante","categoria":"Bebida","regiao":"Sul","quantidade":2,"preco_unitario":"7.00"},{"id_venda":"V0050","data":"2025-02-02","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Centro-Oeste","quantidade":4,"preco_unitario":"16.50"},{"id_venda":"V0090","data":"2025-06-17","produto":"Veggie","categoria":"Lanche","regiao":"Norte","quantidade":3,"preco_unitario":"29.50"},{"id_venda":"V0129","data":"2025-09-12","produto":"Milkshake","categoria":"Sobremesa","regiao":"Sudeste","quantidade":4,"preco_unitario":"18.00"},{"id_venda":"V0075","data":"2025-03-17","produto":"Suco natural","categoria":"Bebida","regiao":"Nordeste","quantidade":1,"preco_unitario":"10.00"},{"id_venda":"V0178","data":"2025-10-19","produto":"X-Bacon","categoria":"Lanche","regiao":"Nordeste","quantidade":3,"preco_unitario":"32.90"},{"id_venda":"V0173","data":"2025-05-27","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Sudeste","quantidade":2,"preco_unitario":"14.00"},{"id_venda":"V0181","data":"2025-01-28","produto":"Brownie","categoria":"Sobremesa","regiao":"Nordeste","quantidade":4,"preco_unitario":"12.00"},{"id_venda":"V0154","data":"2025-10-21","produto":"Refrigerante","categoria":"Bebida","regiao":"Nordeste","quantidade":2,"preco_unitario":"7.00"},{"id_venda":"V0056","data":"2025-08-29","produto":"Brownie","categoria":"Sobremesa","regiao":"Sudeste","quantidade":4,"preco_unitario":"12.00"},{"id_venda":"V0039","data":"2025-03-28","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Norte","quantidade":1,"preco_unitario":"16.50"},{"id_venda":"V0124","data":"2025-04-26","produto":"Brownie","categoria":"Sobremesa","regiao":"Centro-Oeste","quantidade":2,"preco_unitario":"12.00"},{"id_venda":"V0021","data":"2025-09-16","produto":"Milkshake","categoria":"Sobremesa","regiao":"Nordeste","quantidade":3,"preco_unitario":"18.00"},{"id_venda":"V0111","data":"2025-03-04","produto":"X-Burger","categoria":"Lanche","regiao":"Norte","quantidade":2,"preco_unitario":"27.90"},{"id_venda":"V0190","data":"2025-10-13","produto":"X-Burger","categoria":"Lanche","regiao":"Sudeste","quantidade":2,"preco_unitario":"27.90"},{"id_venda":"V0166","data":"2025-10-26","produto":"Milkshake","categoria":"Sobremesa","regiao":"Sudeste","quantidade":4,"preco_unitario":"18.00"},{"id_venda":"V0092","data":"2025-08-29","produto":"X-Bacon","categoria":"Lanche","regiao":"Norte","quantidade":3,"preco_unitario":"32.90"},{"id_venda":"V0105","data":"2025-09-29","produto":"Refrigerante","categoria":"Bebida","regiao":"Centro-Oeste","quantidade":5,"preco_unitario":"7.00"},{"id_venda":"V0077","data":"2025-05-29","produto":"Brownie","categoria":"Sobremesa","regiao":"Sul","quantidade":4,"preco_unitario":"12.00"},{"id_venda":"V0130","data":"2025-10-05","produto":"Veggie","categoria":"Lanche","regiao":"Sul","quantidade":3,"preco_unitario":"29.50"},{"id_venda":"V0199","data":"2025-07-16","produto":"Refrigerante","categoria":"Bebida","regiao":"Sul","quantidade":5,"preco_unitario":"7.00"},{"id_venda":"V0095","data":"2025-11-02","produto":"Veggie","categoria":"Lanche","regiao":"Norte","quantidade":5,"preco_unitario":"29.50"},{"id_venda":"V0079","data":"2025-07-25","produto":"X-Bacon","categoria":"Lanche","regiao":"Norte","quantidade":2,"preco_unitario":"32.90"},{"id_venda":"V0116","data":"2025-08-28","produto":"X-Bacon","categoria":"Lanche","regiao":"Nordeste","quantidade":3,"preco_unitario":"32.90"},{"id_venda":"V0163","data":"2025-07-15","produto":"Veggie","categoria":"Lanche","regiao":"Sudeste","quantidade":3,"preco_unitario":"29.50"},{"id_venda":"V0189","data":"2025-09-22","produto":"Milkshake","categoria":"Sobremesa","regiao":"Sul","quantidade":4,"preco_unitario":"18.00"},{"id_venda":"V0115","data":"2025-07-09","produto":"X-Bacon","categoria":"Lanche","regiao":"Sudeste","quantidade":5,"preco_unitario":"32.90"},{"id_venda":"V0183","data":"2025-03-09","produto":"Veggie","categoria":"Lanche","regiao":"Nordeste","quantidade":1,"preco_unitario":"29.50"},{"id_venda":"V0054","data":"2025-06-21","produto":"Suco natural","categoria":"Bebida","regiao":"Centro-Oeste","quantidade":2,"preco_unitario":"10.00"},{"id_venda":"V0064","data":"2025-04-04","produto":"Milkshake","categoria":"Sobremesa","regiao":"Norte","quantidade":2,"preco_unitario":"18.00"},{"id_venda":"V0121","data":"2025-01-31","produto":"Refrigerante","categoria":"Bebida","regiao":"Sul","quantidade":5,"preco_unitario":"7.00"},{"id_venda":"V0044","data":"2025-08-24","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Sul","quantidade":1,"preco_unitario":"16.50"},{"id_venda":"V0132","data":"2025-12-15","produto":"Milkshake","categoria":"Sobremesa","regiao":"Sul","quantidade":4,"preco_unitario":"18.00"},{"id_venda":"V0194","data":"2025-02-16","produto":"Refrigerante","categoria":"Bebida","regiao":"Nordeste","quantidade":4,"preco_unitario":"7.00"},{"id_venda":"V0148","data":"2025-04-11","produto":"Brownie","categoria":"Sobremesa","regiao":"Sul","quantidade":4,"preco_unitario":"12.00"},{"id_venda":"V0060","data":"2025-12-15","produto":"Suco natural","categoria":"Bebida","regiao":"Norte","quantidade":5,"preco_unitario":"10.00"},{"id_venda":"V0135","data":"2025-03-10","produto":"Brownie","categoria":"Sobremesa","regiao":"Sudeste","quantidade":4,"preco_unitario":"12.00"},{"id_venda":"V0025","data":"2025-01-16","produto":"Milkshake","categoria":"Sobremesa","regiao":"Sul","quantidade":2,"preco_unitario":"18.00"},{"id_venda":"V0188","data":"2025-08-21","produto":"X-Burger","categoria":"Lanche","regiao":"Sudeste","quantidade":1,"preco_unitario":"27.90"},{"id_venda":"V0142","data":"2025-10-14","produto":"Suco natural","categoria":"Bebida","regiao":"Sudeste","quantidade":1,"preco_unitario":"10.00"},{"id_venda":"V0028","data":"2025-04-29","produto":"Brownie","categoria":"Sobremesa","regiao":"Centro-Oeste","quantidade":5,"preco_unitario":"12.00"},{"id_venda":"V0043","data":"2025-07-12","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Centro-Oeste","quantidade":1,"preco_unitario":"16.50"},{"id_venda":"V0037","data":"2025-01-10","produto":"Refrigerante","categoria":"Bebida","regiao":"Norte","quantidade":4,"preco_unitario":"7.00"},{"id_venda":"V0046","data":"2025-10-06","produto":"Veggie","categoria":"Lanche","regiao":"Nordeste","quantidade":4,"preco_unitario":"29.50"},{"id_venda":"V0195","data":"2025-03-20","produto":"Milkshake","categoria":"Sobremesa","regiao":"Sul","quantidade":2,"preco_unitario":"18.00"},{"id_venda":"V0001","data":"2025-01-03","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Sul","quantidade":5,"preco_unitario":"14.00"},{"id_venda":"V0084","data":"2025-12-29","produto":"Refrigerante","categoria":"Bebida","regiao":"Sul","quantidade":2,"preco_unitario":"7.00"},{"id_venda":"V0192","data":"2025-12-19","produto":"Refrigerante","categoria":"Bebida","regiao":"Nordeste","quantidade":1,"preco_unitario":"7.00"},{"id_venda":"V0029","data":"2025-05-27","produto":"Refrigerante","categoria":"Bebida","regiao":"Centro-Oeste","quantidade":2,"preco_unitario":"7.00"},{"id_venda":"V0072","data":"2025-12-05","produto":"Veggie","categoria":"Lanche","regiao":"Centro-Oeste","quantidade":1,"preco_unitario":"29.50"},{"id_venda":"V0198","data":"2025-06-14","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Nordeste","quantidade":2,"preco_unitario":"14.00"},{"id_venda":"V0180","data":"2025-12-03","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Sul","quantidade":3,"preco_unitario":"16.50"},{"id_venda":"V0104","data":"2025-08-22","produto":"Milkshake","categoria":"Sobremesa","regiao":"Sudeste","quantidade":1,"preco_unitario":"18.00"},{"id_venda":"V0149","data":"2025-05-24","produto":"Milkshake","categoria":"Sobremesa","regiao":"Norte","quantidade":2,"preco_unitario":"18.00"},{"id_venda":"V0081","data":"2025-09-15","produto":"X-Bacon","categoria":"Lanche","regiao":"Sudeste","quantidade":1,"preco_unitario":"32.90"},{"id_venda":"V0137","data":"2025-05-06","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Sul","quantidade":5,"preco_unitario":"14.00"},{"id_venda":"V0193","data":"2025-01-08","produto":"Milkshake","categoria":"Sobremesa","regiao":"Sudeste","quantidade":5,"preco_unitario":"18.00"},{"id_venda":"V0140","data":"2025-08-15","produto":"Suco natural","categoria":"Bebida","regiao":"Sudeste","quantidade":1,"preco_unitario":"10.00"},{"id_venda":"V0094","data":"2025-10-22","produto":"Brownie","categoria":"Sobremesa","regiao":"Centro-Oeste","quantidade":4,"preco_unitario":"12.00"},{"id_venda":"V0106","data":"2025-10-21","produto":"Suco natural","categoria":"Bebida","regiao":"Nordeste","quantidade":5,"preco_unitario":"10.00"},{"id_venda":"V0170","data":"2025-02-12","produto":"Milkshake","categoria":"Sobremesa","regiao":"Norte","quantidade":3,"preco_unitario":"18.00"},{"id_venda":"V0159","data":"2025-03-05","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Nordeste","quantidade":3,"preco_unitario":"14.00"},{"id_venda":"V0101","data":"2025-05-14","produto":"Veggie","categoria":"Lanche","regiao":"Norte","quantidade":2,"preco_unitario":"29.50"},{"id_venda":"V0102","data":"2025-06-02","produto":"X-Bacon","categoria":"Lanche","regiao":"Sul","quantidade":5,"preco_unitario":"32.90"},{"id_venda":"V0179","data":"2025-11-20","produto":"X-Burger","categoria":"Lanche","regiao":"Centro-Oeste","quantidade":1,"preco_unitario":"27.90"},{"id_venda":"V0182","data":"2025-02-19","produto":"Refrigerante","categoria":"Bebida","regiao":"Centro-Oeste","quantidade":2,"preco_unitario":"7.00"},{"id_venda":"V0057","data":"2025-09-19","produto":"Veggie","categoria":"Lanche","regiao":"Sudeste","quantidade":4,"preco_unitario":"29.50"},{"id_venda":"V0098","data":"2025-02-20","produto":"Milkshake","categoria":"Sobremesa","regiao":"Nordeste","quantidade":1,"preco_unitario":"18.00"},{"id_venda":"V0040","data":"2025-04-25","produto":"Milkshake","categoria":"Sobremesa","regiao":"Sudeste","quantidade":3,"preco_unitario":"18.00"},{"id_venda":"V0023","data":"2025-11-08","produto":"Milkshake","categoria":"Sobremesa","regiao":"Sul","quantidade":3,"preco_unitario":"18.00"},{"id_venda":"V0151","data":"2025-07-16","produto":"Refrigerante","categoria":"Bebida","regiao":"Norte","quantidade":3,"preco_unitario":"7.00"},{"id_venda":"V0200","data":"2025-08-06","produto":"Refrigerante","categoria":"Bebida","regiao":"Nordeste","quantidade":1,"preco_unitario":"7.00"},{"id_venda":"V0103","data":"2025-07-15","produto":"Suco natural","categoria":"Bebida","regiao":"Nordeste","quantidade":2,"preco_unitario":"10.00"},{"id_venda":"V0087","data":"2025-03-21","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Nordeste","quantidade":5,"preco_unitario":"16.50"},{"id_venda":"V0122","data":"2025-02-12","produto":"Refrigerante","categoria":"Bebida","regiao":"Sul","quantidade":1,"preco_unitario":"7.00"},{"id_venda":"V0032","data":"2025-08-04","produto":"X-Bacon","categoria":"Lanche","regiao":"Nordeste","quantidade":4,"preco_unitario":"32.90"},{"id_venda":"V0112","data":"2025-04-27","produto":"X-Bacon","categoria":"Lanche","regiao":"Centro-Oeste","quantidade":5,"preco_unitario":"32.90"},{"id_venda":"V0048","data":"2025-12-26","produto":"Suco natural","categoria":"Bebida","regiao":"Norte","quantidade":1,"preco_unitario":"10.00"},{"id_venda":"V0160","data":"2025-04-02","produto":"Brownie","categoria":"Sobremesa","regiao":"Sudeste","quantidade":3,"preco_unitario":"12.00"},{"id_venda":"V0114","data":"2025-06-16","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Centro-Oeste","quantidade":5,"preco_unitario":"16.50"},{"id_venda":"V0152","data":"2025-08-28","produto":"Refrigerante","categoria":"Bebida","regiao":"Sul","quantidade":1,"preco_unitario":"7.00"},{"id_venda":"V0146","data":"2025-02-21","produto":"Suco natural","categoria":"Bebida","regiao":"Norte","quantidade":1,"preco_unitario":"10.00"},{"id_venda":"V0065","data":"2025-05-18","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Norte","quantidade":3,"preco_unitario":"16.50"},{"id_venda":"V0074","data":"2025-02-25","produto":"X-Bacon","categoria":"Lanche","regiao":"Centro-Oeste","quantidade":1,"preco_unitario":"32.90"},{"id_venda":"V0062","data":"2025-02-15","produto":"X-Bacon","categoria":"Lanche","regiao":"Sul","quantidade":3,"preco_unitario":"32.90"},{"id_venda":"V0171","data":"2025-03-27","produto":"X-Bacon","categoria":"Lanche","regiao":"Sudeste","quantidade":5,"preco_unitario":"32.90"},{"id_venda":"V0004","data":"2025-04-24","produto":"Veggie","categoria":"Lanche","regiao":"Norte","quantidade":4,"preco_unitario":"29.50"},{"id_venda":"V0067","data":"2025-07-25","produto":"Suco natural","categoria":"Bebida","regiao":"Norte","quantidade":1,"preco_unitario":"10.00"},{"id_venda":"V0035","data":"2025-11-28","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Centro-Oeste","quantidade":4,"preco_unitario":"16.50"},{"id_venda":"V0033","data":"2025-09-28","produto":"Veggie","categoria":"Lanche","regiao":"Sul","quantidade":2,"preco_unitario":"29.50"},{"id_venda":"V0071","data":"2025-11-29","produto":"Milkshake","categoria":"Sobremesa","regiao":"Sul","quantidade":4,"preco_unitario":"18.00"},{"id_venda":"V0003","data":"2025-03-01","produto":"Milkshake","categoria":"Sobremesa","regiao":"Nordeste","quantidade":4,"preco_unitario":"18.00"},{"id_venda":"V0052","data":"2025-04-02","produto":"Refrigerante","categoria":"Bebida","regiao":"Centro-Oeste","quantidade":4,"preco_unitario":"7.00"},{"id_venda":"V0176","data":"2025-08-20","produto":"Brownie","categoria":"Sobremesa","regiao":"Sudeste","quantidade":3,"preco_unitario":"12.00"},{"id_venda":"V0085","data":"2025-01-18","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Sul","quantidade":3,"preco_unitario":"14.00"},{"id_venda":"V0007","data":"2025-07-15","produto":"Veggie","categoria":"Lanche","regiao":"Sul","quantidade":5,"preco_unitario":"29.50"},{"id_venda":"V0120","data":"2025-12-12","produto":"X-Bacon","categoria":"Lanche","regiao":"Sul","quantidade":4,"preco_unitario":"32.90"},{"id_venda":"V0002","data":"2025-02-16","produto":"Brownie","categoria":"Sobremesa","regiao":"Nordeste","quantidade":4,"preco_unitario":"12.00"},{"id_venda":"V0018","data":"2025-06-17","produto":"Suco natural","categoria":"Bebida","regiao":"Centro-Oeste","quantidade":4,"preco_unitario":"10.00"},{"id_venda":"V0024","data":"2025-12-09","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Sul","quantidade":5,"preco_unitario":"14.00"},{"id_venda":"V0175","data":"2025-07-07","produto":"Brownie","categoria":"Sobremesa","regiao":"Nordeste","quantidade":3,"preco_unitario":"12.00"},{"id_venda":"V0196","data":"2025-04-13","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Norte","quantidade":2,"preco_unitario":"14.00"},{"id_venda":"V0177","data":"2025-09-11","produto":"Milkshake","categoria":"Sobremesa","regiao":"Nordeste","quantidade":2,"preco_unitario":"18.00"},{"id_venda":"V0131","data":"2025-11-09","produto":"X-Burger","categoria":"Lanche","regiao":"Centro-Oeste","quantidade":5,"preco_unitario":"27.90"},{"id_venda":"V0100","data":"2025-04-11","produto":"Milkshake","categoria":"Sobremesa","regiao":"Norte","quantidade":5,"preco_unitario":"18.00"},{"id_venda":"V0150","data":"2025-06-13","produto":"Batata frita","categoria":"Acompanhamento","regiao":"Sudeste","quantidade":3,"preco_unitario":"14.00"},{"id_venda":"V0128","data":"2025-08-21","produto":"Refrigerante","categoria":"Bebida","regiao":"Nordeste","quantidade":2,"preco_unitario":"7.00"},{"id_venda":"V0014","data":"2025-02-22","produto":"Veggie","categoria":"Lanche","regiao":"Sudeste","quantidade":3,"preco_unitario":"29.50"},{"id_venda":"V0082","data":"2025-10-15","produto":"Milkshake","categoria":"Sobremesa","regiao":"Centro-Oeste","quantidade":5,"preco_unitario":"18.00"},{"id_venda":"V0153","data":"2025-09-11","produto":"Brownie","categoria":"Sobremesa","regiao":"Norte","quantidade":4,"preco_unitario":"12.00"},{"id_venda":"V0036","data":"2025-12-30","produto":"X-Bacon","categoria":"Lanche","regiao":"Norte","quantidade":1,"preco_unitario":"32.90"},{"id_venda":"V0123","data":"2025-03-07","produto":"Milkshake","categoria":"Sobremesa","regiao":"Norte","quantidade":1,"preco_unitario":"18.00"},{"id_venda":"V0165","data":"2025-09-01","produto":"Brownie","categoria":"Sobremesa","regiao":"Norte","quantidade":2,"preco_unitario":"12.00"},{"id_venda":"V0076","data":"2025-04-07","produto":"Suco natural","categoria":"Bebida","regiao":"Centro-Oeste","quantidade":1,"preco_unitario":"10.00"},{"id_venda":"V0097","data":"2025-01-14","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Sudeste","quantidade":5,"preco_unitario":"16.50"},{"id_venda":"V0041","data":"2025-05-21","produto":"Milkshake","categoria":"Sobremesa","regiao":"Centro-Oeste","quantidade":5,"preco_unitario":"18.00"},{"id_venda":"V0108","data":"2025-12-25","produto":"Brownie","categoria":"Sobremesa","regiao":"Norte","quantidade":4,"preco_unitario":"12.00"},{"id_venda":"V0162","data":"2025-06-29","produto":"Onion rings","categoria":"Acompanhamento","regiao":"Norte","quantidade":3,"preco_unitario":"16.50"}];

const CAMPOS_EXPORTACAO = [
  'id_venda', 'data', 'produto', 'categoria', 'regiao', 'quantidade', 'preco_unitario'
];
const MOEDA = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const NUMERO = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 });
const NOME_MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

const elementos = {
  inicio: document.getElementById('date-start'),
  fim: document.getElementById('date-end'),
  categoria: document.getElementById('category-filter'),
  regiao: document.getElementById('region-filter'),
  pesquisa: document.getElementById('table-search'),
  arquivo: document.getElementById('csv-file'),
  notaBase: document.getElementById('dataset-note'),
  corpoTabela: document.getElementById('sales-table-body'),
  contagem: document.getElementById('record-count'),
  semResultados: document.getElementById('no-results')
};

let registros = [];
let camposOriginais = CAMPOS_EXPORTACAO.slice();
let nomeDaBase = 'dados-exemplo.csv';
let informacoesBase = { lidas: 0, descartadas: 0, motivos: {}, ausentes: {} };
let ordem = { campo: 'id_venda', direcao: 'asc' };
let graficos = {};

function normalizarTexto(valor) {
  return String(valor ?? '').trim().toLocaleLowerCase('pt-BR');
}

function normalizarCabecalho(valor) {
  return String(valor ?? '')
    .replace(/^\uFEFF/, '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR').trim()
    .replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function converterNumero(valor) {
  if (typeof valor === 'number') return Number.isFinite(valor) ? valor : null;
  let texto = String(valor ?? '').trim().replace(/[\s\u00a0R$]/g, '');
  if (!texto) return null;

  const virgula = texto.lastIndexOf(',');
  const ponto = texto.lastIndexOf('.');
  if (virgula >= 0 && ponto >= 0) {
    const decimal = Math.max(virgula, ponto);
    texto = texto.slice(0, decimal).replace(/[.,]/g, '') + '.' + texto.slice(decimal + 1);
  } else if (virgula >= 0) {
    texto = texto.replace(/\./g, '').replace(',', '.');
  } else if ((texto.match(/\./g) || []).length > 1) {
    texto = texto.replace(/\./g, '');
  }

  const numero = Number(texto);
  return Number.isFinite(numero) ? numero : null;
}

function converterData(valor) {
  const texto = String(valor ?? '').trim();
  let ano, mes, dia;
  let partes = texto.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (partes) {
    [, ano, mes, dia] = partes;
  } else {
    partes = texto.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!partes) return null;
    [, dia, mes, ano] = partes;
  }
  const data = new Date(Date.UTC(Number(ano), Number(mes) - 1, Number(dia)));
  if (data.getUTCFullYear() !== Number(ano) || data.getUTCMonth() !== Number(mes) - 1 || data.getUTCDate() !== Number(dia)) return null;
  return `${ano}-${mes}-${dia}`;
}

function encontrarCabecalho(cabecalhos, alternativas) {
  for (const alternativa of alternativas) {
    const campo = cabecalhos.find((item) => normalizarCabecalho(item) === alternativa);
    if (campo !== undefined) return campo;
  }
  return null;
}

function prepararRegistros(linhas, cabecalhos) {
  const campos = {
    id: encontrarCabecalho(cabecalhos, ['id_venda', 'id_da_venda', 'id']),
    data: encontrarCabecalho(cabecalhos, ['data', 'data_venda']),
    produto: encontrarCabecalho(cabecalhos, ['produto', 'nome_produto']),
    categoria: encontrarCabecalho(cabecalhos, ['categoria']),
    regiao: encontrarCabecalho(cabecalhos, ['regiao']),
    quantidade: encontrarCabecalho(cabecalhos, ['quantidade', 'qtd']),
    preco: encontrarCabecalho(cabecalhos, ['preco_unitario', 'valor_unitario', 'preco'])
  };
  const obrigatorios = ['id', 'data', 'quantidade', 'preco'];
  const faltantes = obrigatorios.filter((campo) => !campos[campo]);
  if (faltantes.length) {
    throw new Error(`Colunas obrigatórias ausentes: ${faltantes.join(', ')}. Use id_venda, data, quantidade e preco_unitario.`);
  }

  const validos = [];
  const motivos = { id: 0, data: 0, quantidade: 0, preco: 0 };
  const ausentes = { produto: 0, categoria: 0, regiao: 0 };

  linhas.forEach((linha) => {
    const id = String(linha[campos.id] ?? '').trim();
    const data = converterData(linha[campos.data]);
    const quantidade = converterNumero(linha[campos.quantidade]);
    const preco = converterNumero(linha[campos.preco]);
    let motivo = '';
    if (!id) motivo = 'id';
    else if (!data) motivo = 'data';
    else if (quantidade === null || quantidade < 0) motivo = 'quantidade';
    else if (preco === null || preco < 0) motivo = 'preco';

    if (motivo) {
      motivos[motivo] += 1;
      return;
    }

    const produto = String(campos.produto ? linha[campos.produto] ?? '' : '').trim();
    const categoria = String(campos.categoria ? linha[campos.categoria] ?? '' : '').trim();
    const regiao = String(campos.regiao ? linha[campos.regiao] ?? '' : '').trim();
    if (!produto) ausentes.produto += 1;
    if (!categoria) ausentes.categoria += 1;
    if (!regiao) ausentes.regiao += 1;

    validos.push({
      id_venda: id,
      data,
      produto: produto || 'Não informado',
      categoria: categoria || 'Não informado',
      regiao: regiao || 'Não informado',
      quantidade,
      preco_unitario: preco,
      faturamento: quantidade * preco,
      original: linha
    });
  });

  return {
    registros: validos,
    informacoes: {
      lidas: linhas.length,
      descartadas: Object.values(motivos).reduce((soma, total) => soma + total, 0),
      motivos,
      ausentes
    }
  };
}

function formatarQuantidade(valor) {
  return NUMERO.format(valor);
}

function atualizarOpcoes(seletor, valores, rotuloInicial) {
  const selecionado = seletor.value;
  seletor.replaceChildren(new Option(rotuloInicial, ''));
  [...new Set(valores)].sort((a, b) => a.localeCompare(b, 'pt-BR')).forEach((valor) => {
    seletor.add(new Option(valor, valor));
  });
  if ([...seletor.options].some((opcao) => opcao.value === selecionado)) seletor.value = selecionado;
}

function atualizarOpcoesFiltros() {
  atualizarOpcoes(elementos.categoria, registros.map((item) => item.categoria), 'Todas as categorias');
  atualizarOpcoes(elementos.regiao, registros.map((item) => item.regiao), 'Todas as regiões');
}

function aplicarFiltros() {
  const busca = normalizarTexto(elementos.pesquisa.value);
  return registros.filter((item) => {
    if (elementos.inicio.value && item.data < elementos.inicio.value) return false;
    if (elementos.fim.value && item.data > elementos.fim.value) return false;
    if (elementos.categoria.value && item.categoria !== elementos.categoria.value) return false;
    if (elementos.regiao.value && item.regiao !== elementos.regiao.value) return false;
    if (!busca) return true;
    const texto = [item.id_venda, item.data, item.produto, item.categoria, item.regiao,
      item.quantidade, item.preco_unitario, item.faturamento].join(' ');
    return normalizarTexto(texto).includes(busca);
  });
}

function atualizarIndicadores(linhas) {
  const faturamento = linhas.reduce((total, item) => total + item.faturamento, 0);
  const unidades = linhas.reduce((total, item) => total + item.quantidade, 0);
  const vendas = new Set(linhas.map((item) => item.id_venda)).size;
  document.getElementById('metric-revenue').textContent = MOEDA.format(faturamento);
  document.getElementById('metric-sales').textContent = formatarQuantidade(vendas);
  document.getElementById('metric-units').textContent = formatarQuantidade(unidades);
  document.getElementById('metric-average').textContent = MOEDA.format(vendas ? faturamento / vendas : 0);
}

function ordenarLinhas(linhas) {
  const sinal = ordem.direcao === 'asc' ? 1 : -1;
  return linhas.slice().sort((a, b) => {
    const primeiro = a[ordem.campo];
    const segundo = b[ordem.campo];
    if (typeof primeiro === 'number' && typeof segundo === 'number') return (primeiro - segundo) * sinal;
    return String(primeiro).localeCompare(String(segundo), 'pt-BR', { numeric: true }) * sinal;
  });
}

function atualizarOrdenacaoVisual() {
  document.querySelectorAll('thead th').forEach((cabecalho) => {
    const botao = cabecalho.querySelector('button[data-sort]');
    if (!botao) return;
    const ativo = botao.dataset.sort === ordem.campo;
    cabecalho.setAttribute('aria-sort', ativo ? (ordem.direcao === 'asc' ? 'ascending' : 'descending') : 'none');
    botao.querySelector('.sort-mark').textContent = ativo ? (ordem.direcao === 'asc' ? '↑' : '↓') : '↕';
  });
}

function desenharTabela(linhas) {
  elementos.corpoTabela.replaceChildren();
  elementos.contagem.textContent = `${formatarQuantidade(linhas.length)} ${linhas.length === 1 ? 'registro exibido' : 'registros exibidos'}`;
  elementos.semResultados.hidden = linhas.length > 0;
  const fragmento = document.createDocumentFragment();

  if (!linhas.length) {
    const linha = document.createElement('tr');
    linha.className = 'empty-row';
    const celula = document.createElement('td');
    celula.colSpan = 7;
    celula.textContent = 'Não há registros para exibir.';
    linha.append(celula);
    fragmento.append(linha);
  } else {
    ordenarLinhas(linhas).forEach((item) => {
      const linha = document.createElement('tr');
      const valores = [item.id_venda, formatarData(item.data), item.produto, item.categoria, item.regiao];
      valores.forEach((valor, indice) => {
        const celula = document.createElement('td');
        if (indice === 3) {
          const selo = document.createElement('span');
          selo.className = 'category-pill';
          selo.textContent = valor;
          celula.append(selo);
        } else {
          celula.textContent = valor;
        }
        linha.append(celula);
      });
      const unidades = document.createElement('td');
      unidades.className = 'numeric';
      unidades.textContent = formatarQuantidade(item.quantidade);
      linha.append(unidades);
      const receita = document.createElement('td');
      receita.className = 'numeric revenue-cell';
      receita.textContent = MOEDA.format(item.faturamento);
      linha.append(receita);
      fragmento.append(linha);
    });
  }
  elementos.corpoTabela.append(fragmento);
  atualizarOrdenacaoVisual();
}

function formatarData(iso) {
  const [ano, mes, dia] = iso.split('-');
  return `${dia}/${mes}/${ano}`;
}

function destruirGraficos() {
  Object.values(graficos).forEach((grafico) => grafico.destroy());
  graficos = {};
}

function formatarMes(chave) {
  const [ano, mes] = chave.split('-');
  return `${NOME_MESES[Number(mes) - 1]}/${ano.slice(-2)}`;
}

function mesesDoPeriodo() {
  if (!registros.length) return [];
  const datas = registros.map((item) => item.data).sort();
  const primeiraData = datas[0];
  const ultimaData = datas[datas.length - 1];
  const inicio = elementos.inicio.value > primeiraData ? elementos.inicio.value : primeiraData;
  const fim = elementos.fim.value && elementos.fim.value < ultimaData ? elementos.fim.value : ultimaData;
  if (inicio > fim) return [];

  const [anoInicial, mesInicial] = inicio.slice(0, 7).split('-').map(Number);
  const [anoFinal, mesFinal] = fim.slice(0, 7).split('-').map(Number);
  const meses = [];
  let ano = anoInicial;
  let mes = mesInicial;
  while (ano < anoFinal || (ano === anoFinal && mes <= mesFinal)) {
    meses.push(`${ano}-${String(mes).padStart(2, '0')}`);
    mes += 1;
    if (mes > 12) { mes = 1; ano += 1; }
  }
  return meses;
}

function opcoesEixoMoeda() {
  return {
    ticks: {
      color: '#8593a6',
      font: { family: 'DM Sans', size: 9 },
      callback: (valor) => MOEDA.format(valor)
    },
    grid: { color: '#edf1f6', drawBorder: false }
  };
}

function desenharGraficos(linhas) {
  destruirGraficos();
  document.querySelectorAll('.chart-unavailable').forEach((aviso) => aviso.remove());
  if (typeof window.Chart !== 'function') {
    document.querySelectorAll('.chart-wrap').forEach((area) => {
      const aviso = document.createElement('p');
      aviso.className = 'chart-unavailable';
      aviso.textContent = 'Conecte-se à internet para carregar os gráficos.';
      area.append(aviso);
    });
    return;
  }
  const porMes = new Map();
  const porCategoria = new Map();
  const porRegiao = new Map();
  linhas.forEach((item) => {
    const mes = item.data.slice(0, 7);
    porMes.set(mes, (porMes.get(mes) || 0) + item.faturamento);
    porCategoria.set(item.categoria, (porCategoria.get(item.categoria) || 0) + item.faturamento);
    porRegiao.set(item.regiao, (porRegiao.get(item.regiao) || 0) + item.faturamento);
  });

  const corPrincipal = '#d36b43';
  const comum = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 250 },
    plugins: {
      legend: { display: true, position: 'bottom', labels: { color: '#718096', boxWidth: 9, boxHeight: 9, padding: 14, font: { family: 'DM Sans', size: 9 } } }
    }
  };
  const mesesGrafico = mesesDoPeriodo();
  graficos.mensal = new Chart(document.getElementById('monthly-chart'), {
    type: 'line',
    data: {
      labels: mesesGrafico.map(formatarMes),
      datasets: [{
        label: 'Faturamento',
        data: mesesGrafico.map((mes) => Number((porMes.get(mes) || 0).toFixed(2))),
        borderColor: corPrincipal, backgroundColor: 'rgba(211, 107, 67, .12)', fill: true,
        tension: .32, borderWidth: 2.5, pointRadius: 3, pointHoverRadius: 5,
        pointBackgroundColor: '#fffefa', pointBorderColor: corPrincipal, pointBorderWidth: 2
      }]
    },
    options: {
      ...comum,
      interaction: { intersect: false, mode: 'index' },
      plugins: { ...comum.plugins, tooltip: { callbacks: { label: (contexto) => ` ${MOEDA.format(contexto.parsed.y)}` } } },
      scales: { x: { ticks: { color: '#8593a6', font: { family: 'DM Sans', size: 9 } }, grid: { display: false } }, y: opcoesEixoMoeda() }
    }
  });

  function criarBarras(elemento, agrupamento, cor) {
    const pares = [...agrupamento.entries()].sort((a, b) => b[1] - a[1]);
    return new Chart(elemento, {
      type: 'bar',
      data: {
        labels: pares.map(([rotulo]) => rotulo),
        datasets: [{
          label: 'Faturamento', data: pares.map(([, valor]) => Number(valor.toFixed(2))),
          backgroundColor: cor,
          borderRadius: 5, maxBarThickness: 24
        }]
      },
      options: {
        ...comum,
        indexAxis: 'y',
        layout: { padding: { right: 7 } },
        plugins: { ...comum.plugins, tooltip: { callbacks: { label: (contexto) => ` ${MOEDA.format(contexto.parsed.x)}` } } },
        scales: {
          x: { ...opcoesEixoMoeda(), beginAtZero: true },
          y: { ticks: { color: '#617189', font: { family: 'DM Sans', size: 10 } }, grid: { display: false } }
        }
      }
    });
  }
  graficos.categoria = criarBarras(document.getElementById('category-chart'), porCategoria, '#4d855c');
  graficos.regiao = criarBarras(document.getElementById('region-chart'), porRegiao, '#316f88');
}

function atualizarNotaBase() {
  const { lidas, descartadas, motivos, ausentes } = informacoesBase;
  let texto = nomeDaBase === 'dados-exemplo.csv'
    ? `Amostra fictícia ativa · ${registros.length} linhas válidas · 12 meses de 2025.`
    : `Arquivo ${nomeDaBase} · ${registros.length} linhas válidas de ${lidas} lidas.`;

  if (descartadas) {
    const descricao = Object.entries(motivos).filter(([, total]) => total)
      .map(([motivo, total]) => `${total} ${rotulosMotivos[motivo]}`).join(', ');
    const plural = descartadas === 1 ? 'linha descartada' : 'linhas descartadas';
    texto += ` ${descartadas} ${plural} por: ${descricao}.`;
  }
  const ausencias = Object.entries(ausentes).filter(([, total]) => total > 0)
    .map(([campo, total]) => `${rotulosCampos[campo]}: ${total}`);
  if (ausencias.length) texto += ` Sem informação (${ausencias.join(' · ')}); exibida como “Não informado”.`;
  texto += ' Linhas com IDs repetidos são mantidas; vendas contam IDs únicos.';
  elementos.notaBase.textContent = texto;
}

const rotulosMotivos = { id: 'ID ausente', data: 'data inválida/ausente', quantidade: 'quantidade inválida/ausente', preco: 'preço inválido/ausente' };
const rotulosCampos = { produto: 'produto', categoria: 'categoria', regiao: 'região' };

function renderizar() {
  const filtrados = aplicarFiltros();
  atualizarIndicadores(filtrados);
  desenharGraficos(filtrados);
  desenharTabela(filtrados);
}

function trocarBase(linhas, cabecalhos, nome, informacoes) {
  registros = linhas;
  camposOriginais = cabecalhos.length ? cabecalhos : CAMPOS_EXPORTACAO.slice();
  nomeDaBase = nome;
  informacoesBase = informacoes;
  elementos.inicio.value = '';
  elementos.fim.value = '';
  elementos.categoria.value = '';
  elementos.regiao.value = '';
  elementos.pesquisa.value = '';
  ordem = { campo: 'id_venda', direcao: 'asc' };
  atualizarOpcoesFiltros();
  atualizarNotaBase();
  renderizar();
}

function importarCsv(arquivo) {
  if (!window.Papa) {
    elementos.notaBase.textContent = 'Não foi possível carregar o Papa Parse. Verifique a conexão com a internet e tente novamente.';
    return;
  }
  window.Papa.parse(arquivo, {
    header: true,
    skipEmptyLines: 'greedy',
    dynamicTyping: false,
    complete(resultado) {
      try {
        if (resultado.errors.some((erro) => erro.code === 'TooManyFields' || erro.code === 'TooFewFields' || /quote/i.test(erro.code))) {
          throw new Error('O arquivo contém linhas CSV malformadas. Confira aspas, separadores e colunas.');
        }
        const campos = resultado.meta.fields || [];
        const preparados = prepararRegistros(resultado.data, campos);
        trocarBase(preparados.registros, campos, arquivo.name, preparados.informacoes);
      } catch (erro) {
        elementos.notaBase.textContent = `Não foi possível importar “${arquivo.name}”: ${erro.message}`;
      } finally {
        elementos.arquivo.value = '';
      }
    },
    error(erro) {
      elementos.notaBase.textContent = `Falha ao ler o arquivo: ${erro.message}`;
      elementos.arquivo.value = '';
    }
  });
}

function exportarCsv() {
  const filtrados = aplicarFiltros();
  const campos = camposOriginais.length ? camposOriginais : CAMPOS_EXPORTACAO;
  const dados = filtrados.map((item) => campos.map((campo) => item.original[campo] ?? ''));
  let conteudo;
  if (window.Papa) {
    conteudo = window.Papa.unparse({ fields: campos, data: dados });
  } else {
    const escapar = (valor) => `"${String(valor).replace(/"/g, '""')}"`;
    conteudo = [campos, ...dados].map((linha) => linha.map(escapar).join(',')).join('\r\n');
  }
  const blob = new Blob(['\uFEFF', conteudo], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `vendas-filtradas-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

document.querySelectorAll('input[type="date"], select').forEach((controle) => controle.addEventListener('change', renderizar));
elementos.pesquisa.addEventListener('input', renderizar);
elementos.arquivo.addEventListener('change', (evento) => {
  const arquivo = evento.target.files && evento.target.files[0];
  if (arquivo) importarCsv(arquivo);
});
document.getElementById('clear-filters').addEventListener('click', () => {
  elementos.inicio.value = '';
  elementos.fim.value = '';
  elementos.categoria.value = '';
  elementos.regiao.value = '';
  elementos.pesquisa.value = '';
  renderizar();
});
document.getElementById('export-csv').addEventListener('click', exportarCsv);
document.querySelectorAll('button[data-sort]').forEach((botao) => {
  botao.addEventListener('click', () => {
    const campo = botao.dataset.sort;
    ordem = { campo, direcao: ordem.campo === campo && ordem.direcao === 'asc' ? 'desc' : 'asc' };
    renderizar();
  });
});

const amostra = prepararRegistros(DADOS_DEMONSTRATIVOS, CAMPOS_EXPORTACAO);
trocarBase(amostra.registros, CAMPOS_EXPORTACAO, 'dados-exemplo.csv', amostra.informacoes);
