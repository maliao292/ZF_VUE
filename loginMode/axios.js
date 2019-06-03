submitLogin () {
    this.$refs.loginForm.validate(valid => {
        if (valid) {
            axios.post('/login', {
                user: this.loginForm.user,
                pass: this.loginForm.pass
            })
                .then((response) => {
                    if (response.status === 200) {
                        this.$store.commit('SET_TOKEN', response.data.token)
                        this.$store.commit('GET_USER', response.data.user)
                        this.$message({
                            message: '登陆成功',
                            type: 'success'
                        })
                        this.$router.push({name: 'activity'})
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        } else {
            console.log('error submit!!')
            return false
        }
    })
},