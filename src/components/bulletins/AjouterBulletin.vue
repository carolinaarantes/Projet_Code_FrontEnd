<template>
    <div>
        <form @submit.prevent="soumettre" style="height: 15vw; margin-left: 10vw;">
            <div class="mb-3">
                <label for="moyenne" class="moyenneBulletin" style="margin-top: 2vw;">Moyenne</label>
                <div class="moyenneBulletin">
                    <input :style="{border:error('moyenne')?'1px solid red':''}" type="text"  v-model="bulletin.moyenne" style="width: 40vw;"> /*class="form-control" id="moyenne"*/
                </div>
            </div>

            <button type="submit" class="btn btn-primary" style="margin-left: 5vw;">Ajouter</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useBulletin from '../../services/serviceBulletin';
const router = useRouter()
const { ajouterBulletin } = useBulletin()

const bulletin = ref({
    moyenne: ''
})

const soumettre = () => {
    console.log('bulletin', bulletin.value)
    ajouterBulletin(bulletin.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout du bulletin", err))
}
</script>

<style lang="scss" scoped></style>