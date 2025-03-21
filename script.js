function generateSignature() {
    const privateKeyPem = document.getElementById("privateKey").value.trim();
    const jsonBody = document.getElementById("jsonBody").value.trim();
    
    if (!privateKeyPem || !jsonBody) {
        alert("Please provide both JSON body and private key.");
        return;
    }

    try {
        const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
        const md = forge.md.sha256.create();
        md.update(jsonBody, "utf8");
        const signature = privateKey.sign(md);
        const signatureBase64 = forge.util.encode64(signature);
        document.getElementById("signature").value = signatureBase64;
    } catch (error) {
        alert("Error generating signature: " + error.message);
    }
}

function copySignature() {
    const signatureField = document.getElementById("signature");
    signatureField.select();
    document.execCommand("copy");
    const copyMessage = document.getElementById("copyMessage");
    copyMessage.textContent = "Signature copied!";
    setTimeout(() => { copyMessage.textContent = ""; }, 2000);
}
