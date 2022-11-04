import * as bcript from "bcryptjs";

const hash = async (plainText: string): Promise<string> => {
  const count = Number(process.env.BCRYPT_COST);
  const salt = await bcript.genSalt(count);
  const cipherText = await bcript.hash(plainText, salt);

  return cipherText;
};

const compare = async (
  plainText: string,
  cypherText: string
): Promise<boolean> => {
  return bcript.compare(plainText, cypherText);
};

const password = "bananinha";
console.time("hash");
hash(password).then((resultadoDoHash) => {
  console.log("hash", resultadoDoHash);
  console.timeEnd("hash");

  compare("nananinha", resultadoDoHash).then((compareResult) =>
    console.log("Compare result:", compareResult)
  );
});
