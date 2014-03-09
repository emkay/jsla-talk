header({prg: 1, chr: 1, map: 0, mir: 1});

reset();
vblankwait(1);
clrmem();
vblankwait(2);

palette();

loadBg();
loadAttribute();

asm('\tLDA #%10010000');
asm('\tSTA $2000');
asm('\tLDA #%00011110');
asm('\tSTA $2001');
asm('Forever:');
asm('\tJMP Forever');
asm('NMI:');

setLowHighBytes();
 
joyInit();
joyRead({label: 'ReadA'});
joyRead({label: 'ReadB'});
joyRead({label: 'ReadSel'});
joyRead({label: 'ReadStart'});
joyRead({label: 'ReadUp', cb: moveUp});
joyRead({label: 'ReadDown', cb: moveDown});
joyRead({label: 'ReadLeft', cb: moveLeft});
joyRead({label: 'ReadRight', cb: moveRight, done: enableBg});

asm('\trti');
asm('\t.bank 1');
asm('\t.org $E000');

pData();

write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write(' modules');
write('');
write('');
write('');
write('');
write('');
write('');

write('');
write('');
write(' nesly');
write('');
write(' take fake js');
write('');
write(' turn it into 6502 asm');
write('');
write('');
write('');
write('uses falafel to get an ast');
write('');
write('');
write('');
write('');
write('');

write('');
write(' it kinda works');
write('');
write('');
write('');
write('');
write(' nesly split');
write('');
write(' split out the chr and prg of a  nes rom');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');

write('');
write(' nesly sprite');
write('');
write(' read the raw sprite data from a chr');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');


loadNametable();
attributeTable();

asm('\t.org $FFFA');

vec();
bank(2, '$0000', '\t.incbin "js-la.chr"');
